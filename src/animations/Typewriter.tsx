import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Text } from '../components';

const Cursor = () => {
  const cursorBlink = {
    blink: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: 'linear',
        times: [0, 0.5, 0.5, 1],
      },
    },
  };

  return (
    <Text
      as={motion.span}
      color='textAccent'
      variants={cursorBlink}
      animate='blink'
    >
      _
    </Text>
  );
};

const Typewriter = ({
  children,
  height = 1,
  duration = 1.4,
  delay = 0,
}: {
  children: string;
  height?: number;
  duration?: number;
  delay?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const displayText = useTransform(rounded, latest => children.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, children.length, {
      type: 'tween',
      delay: delay,
      duration: duration,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, []);

  return (
    <div style={{ height: `${height}lh` }}>
      <motion.span>{displayText}</motion.span>
      <Cursor />
    </div>
  );
};

export { Typewriter };
