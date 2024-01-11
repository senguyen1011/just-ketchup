import styled from 'styled-components';
import { Button, Card, Container, Flex, Grid, Heading, Text, Image } from '../../components';
import { Carousel } from '../components';

const Work = () => {
  return (
    <HeroContainer
      id='work'
      mx='auto'
      py='10'
    >
      <Grid
        alignItems='center'
        columns='1fr 0.25fr 2.5fr 0.25fr 1fr'
      >
        <Card id='workDescription'>
          <Flex
            direction='column'
            justifyContent='space-between'
            gap='8'
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
        <WorkLine />
        <Carousel>
          {['fear-hunger-1.jpg', 'fear-hunger-2.jpg', 'fear-hunger-3.jpg'].map(
            (fileName, ind) => (
              <CarouselImage
                name={fileName}
                alt={fileName}
                key={`image-${ind}`}
              />
            )
          )}
        </Carousel>
        <WorkLine />
        <Card id='workUpdates'>
          <Flex
            direction='column'
            justifyContent='space-between'
            gap='8'
          >
            <Flex
              direction='column'
              gap='4'
            >
              <Flex direction='column'>
                <Heading size='3'>Latest Update</Heading>
                <Heading
                  size='5'
                  color='textSecondary'
                >
                  Dec 7, 2023 -{' '}
                  <Text
                    color='textAccent'
                    style={{ display: 'inline-block' }}
                  >
                    v0.1.2
                  </Text>
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
              <Button color='accent'>READ THE CHANGELOGS</Button>
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

const WorkLine = styled.div`
  width: 100%;
  border-top: 2px solid ${props => props.theme.color['gray']['border']};
  z-index: -100;
`;
export { Work };
