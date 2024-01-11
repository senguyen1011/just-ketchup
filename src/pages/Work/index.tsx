import styled from 'styled-components';
import { Button, Card, Container, Flex, Grid, Heading, Text, Image } from '../../components';
import {  Carousel } from '../components';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <HeroContainer
      id='work'
      mx='auto'
      py='10'
    >
      <Grid
        alignItems='center'
        columns='1fr 3fr 1fr'
        gap='10'
      >
        <Card id='workDescription'>
          <Flex
            direction='column'
            justifyContent='space-between'
          >
            <Flex
              direction='column'
              gap='4'
            >
              <Flex direction='column'>
                <Heading size='3'>Fear & Hunger</Heading>
                <Heading
                  size='5'
                  color='textSecondary'
                >
                  In development
                </Heading>
              </Flex>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Text>
            </Flex>
            <Flex
              direction='column'
              gap='4'
            >
              <Flex direction='column'>
                <Heading size='4'>Tags</Heading>
              </Flex>
              <Button color='accent'>PURCHASE</Button>
            </Flex>
          </Flex>
        </Card>
        <Carousel>
          {[
            'fear-hunger-1.jpg',
            'fear-hunger-2.jpg',
            'fear-hunger-3.jpg',
            'fear-hunger-4.jpg',
          ].map((fileName, ind) => (
            <CarouselImage
            as={motion(Image)}
              name={fileName}
              alt={fileName}
              key={`image-${ind}`}
            />
            // fileName
          ))}
        </Carousel>
        <Card id='workUpdates'>
          <Flex
            direction='column'
            justifyContent='space-between'
          >
            <Flex
              direction='column'
              gap='4'
            >
              <Flex direction='column'>
                <Heading size='3'>Fear & Hunger</Heading>
                <Heading
                  size='5'
                  color='textSecondary'
                >
                  In development
                </Heading>
              </Flex>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Text>
            </Flex>
            <Flex
              direction='column'
              gap='4'
            >
              <Flex direction='column'>
                <Heading size='4'>Tags</Heading>
              </Flex>
              <Button color='accent'>PURCHASE</Button>
            </Flex>
          </Flex>
        </Card>
      </Grid>
    </HeroContainer>
  );
};

const HeroContainer = styled(Container)`
  height: calc(100vh - var(--navbar-height));
`;

const CarouselImage = styled(Image)`
  width: 100%;
  border-radius: ${props => props.theme.radius['2']};
  box-shadow: ${props => props.theme.shadow['3']};
`;
export { Work };
