# Use a lighter Node.js image as a base
FROM node:19.6-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy only package.json and package-lock.json to leverage Docker caching
COPY package*.json ./
COPY vite.config.js ./

# Install dependencies and Vite globally
#RUN npm ci --only=production 
#RUN npm install

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci

#RUN chown -R node:node /usr/src/portfolio

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Final stage to create a smaller image
FROM node:19.6-alpine

# Set the working directory
WORKDIR /usr/src/portfolio

# Install only serve globally for serving the application
RUN npm install -g serve

# Copy the built application from the build stage
USER node

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Expose the port your application is running on
EXPOSE 5001

# Set the default command to serve the application
CMD serve -s dist -l 5001