export { Typewriter } from './Typewriter';

export const fadeIn = ({ duration = 0.2, delay = 0, direction = '' }) => {
  return {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
    hidden: {
      opacity: 0,
      x: direction === '' ? 0 : direction === 'left' ? -50 : 50,
    },
  };
};