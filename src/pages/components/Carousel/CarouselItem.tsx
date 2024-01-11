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
  let scaleEnter = distanceFactor;
  let scaleExit = distanceFactor;

  if (offset > 0) {
    translateY += yOffset;
    scaleEnter = distanceFactor * distanceFactor;
    scaleExit = 1 - Math.abs((offset - 1) / (radius + 1)) / 4;
  } else if (offset < 0) {
    translateY -= yOffset;
    scaleEnter = 1 - Math.abs((offset + 1) / (radius + 1)) / 4;
    scaleExit = distanceFactor * distanceFactor;
  }
  return (
    <ItemWrapper
      style={{
        zIndex: Math.abs(Math.abs(offset) - 2),
        top: `${topPosition}%`,
      }}
      initial={{
        transform: `translateY(${translateY + (isForward ? yConstant : -yConstant)}%) scale(${
          isForward ? scaleEnter : scaleExit
        })`,
        opacity: 0,
        filter: 'blur(2px)',
      }}
      animate={{
        transform: `translateY(${translateY}%) scale(${distanceFactor})`,
        opacity: distanceFactor * distanceFactor,
        filter: `blur(${Math.abs(offset * 2)}px)`,
      }}
      exit={{
        transform: `translateY(${translateY + (isForward ? -yConstant : yConstant)}%) scale(${
          isForward ? scaleExit : scaleEnter
        })`,
        opacity: 0,
        filter: 'blur(2px)',
      }}
      key={`carousel-item-${typeof children === 'string' ? children : children.props.name}`}
    >
      {children}
    </ItemWrapper>
  );
};

export { CarouselItem };
