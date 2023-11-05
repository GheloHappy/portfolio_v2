import { 
    FaSquareFacebook, 
    FaSquareThreads,
    FaSquareInstagram, 
    FaSquareTwitter, 
    FaLinkedin, 
    FaSquareGithub,
    FaMobileScreen,
    FaGoogle
} from 'react-icons/fa6';

export const socials = [
    { label: 'Facebook', value: 'https://www.facebook.com/ghelonico.maligaya/', icon: <FaSquareFacebook />},
    { label: 'Instagram', value: 'https://www.instagram.com/ghelonico/', icon: <FaSquareInstagram /> },
    { label: 'Threads', value: 'https://www.threads.net/@ghelonico', icon: <FaSquareThreads /> },
    { label: 'Twiiter', value: 'https://twitter.com/KoyaMoNico', icon: <FaSquareTwitter /> },
    { label: 'LinkedIn', value: 'https://www.linkedin.com/in/ghelonico-maligaya-52a3bb204/', icon: <FaLinkedin />  },
    { label: 'GitHub', value: 'https://github.com/GheloHappy' , icon: <FaSquareGithub />},
]

export const contactInfos = [
    { label: 'number', value: '+639612817481', icon: <FaMobileScreen /> },
    { label: 'email', value: 'ghelonicomaligaya111@gmail.com', icon: <FaGoogle /> },
]