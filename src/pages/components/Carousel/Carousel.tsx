import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Flex, Button } from '../../../components';
import { CarouselItem } from './CarouselItem';

interface CarouselProps {
  children?: (string | JSX.Element)[];
  radius?: number;
}

const Carousel = ({ children = [], radius = 1 }: CarouselProps) => {
  const [itemInd, setItemInd] = useState<number>(0);
  const [isForward, setForward] = useState<boolean>(true);
  const lengthMod = (ind: number) => {
    return ((ind % children.length) + children.length) % children.length;
  };

  const getVisibleChildren = () => {
    const res = [];
    for (let ind = -radius; ind <= radius; ind++) {
      res.push(children[lengthMod(itemInd + ind)]);
    }
    return res;
  };

  const handlePaginate = (dir: number) => {
    setItemInd(lengthMod(itemInd + dir));
    setForward(dir > 0);
  };
  return (
    <Flex
      direction='column'
      justifyContent='center'
      width='100%'
      height='auto'
      style={{ position: 'relative'}}
    >
      <Button onClick={() => handlePaginate(-1)}>Prev</Button>
      <Button onClick={() => handlePaginate(1)}>Next</Button>
      <CarouselContainer>
        <AnimatePresence>
          {getVisibleChildren().map((child, ind) => {
            return (
              <CarouselItem
                radius={radius}
                itemInd={ind}
                key={`item-${ind}`}
                isForward={isForward}
              >
                {child}
              </CarouselItem>
            );
          })}
        </AnimatePresence>
        <HiddenChild>{children[0]}</HiddenChild>
      </CarouselContainer>
    </Flex>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  margin: 10% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HiddenChild = styled.div`
  pointer-events: none;
  visibility: hidden;
  width: 100%;
  height: 100%;
`

export { Carousel };
