import styled from 'styled-components';
import { motion } from 'framer-motion';

const ItemWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 50% 50%;
`;

interface CarouselItemProps {
  children?: string | JSX.Element;
  radius?: number;
  itemInd: number;
  isForward?: boolean;
}

const CarouselItem = ({
  children = '',
  radius = 1,
  itemInd,
  isForward = true,
}: CarouselItemProps) => {
  const offset = itemInd - radius;
  const distanceFactor = 1 - Math.abs(offset / (radius + 1)) / 4;
  const yConstant = 10;
  const yOffset = yConstant * (Math.abs(offset) / (radius + 1));
  const topPosition = radius === 0 ? 0 : offset * yConstant;
  let translateY = 0;
  if (offset > 0) {
    translateY += yOffset;
  } else if (offset < 0) {
    translateY -= yOffset;
  }

  return (
    <ItemWrapper
      style={{
        zIndex: Math.abs(Math.abs(offset) - 2),
        top: `${topPosition}%`,
      }}
      initial={{
        transform: `translateY(${
          translateY + (isForward ? yConstant : -yConstant)
        }%) scale(${distanceFactor})`,
        opacity: 0,
        
        filter: 'blur(4px)'
      }}
      animate={{
        transform: `translateY(${translateY}%) scale(${distanceFactor})`,
        opacity: distanceFactor * distanceFactor,
        filter: `blur(${Math.abs(offset * 2)}px)`
      }}
      exit={{
        transform: `translateY(${
          translateY + (isForward ? -yConstant : yConstant)
        }%) scale(${distanceFactor})`,
        opacity: 0,
        filter: 'blur(4px)'
      }}
      key={`item-${itemInd}`}
    >
      {children}
    </ItemWrapper>
  );
};

export { CarouselItem };
