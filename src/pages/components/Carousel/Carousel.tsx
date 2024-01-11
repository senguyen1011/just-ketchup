import { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Flex, Button, Icon } from '../../../components';
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
      style={{ position: 'relative' }}
    >
      <ButtonWrapper>
        <PaginateButton onClick={() => handlePaginate(-1)}>
          <Icon name='expandLess' />
        </PaginateButton>
        <PaginateButton onClick={() => handlePaginate(1)}>
          <Icon name='expandMore' />
        </PaginateButton>
      </ButtonWrapper>
      <CarouselContainer>
        <AnimatePresence>
          {getVisibleChildren().map((child, ind) => {
            return (
              <CarouselItem
                radius={radius}
                itemInd={ind}
                key={`item-${typeof child === 'string' ? child : child.props.name}`}
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



const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 5;
`;

const PaginateButton = styled(Button)`
  border-radius: ${props => props.theme.radius['full']};
  width: 3em;
  height: 3em;
`;

const HiddenChild = styled.div`
  pointer-events: none;
  visibility: hidden;
  width: 100%;
  height: 100%;
`;

export { Carousel };
