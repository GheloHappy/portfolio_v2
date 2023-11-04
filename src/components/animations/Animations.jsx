export const fadeAnim = (time) => ({
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: time,
      duration: 1,
    }
  },
});

export const slideAnim = (isInView, time) => ({
  transform: isInView ? "none" : "translateX(-200px)",
  opacity: isInView ? 1 : 0,
  transition: `all 2s cubic-bezier(0.17, 0.55, 0.55, 1) ${time * 0.2}s`
});