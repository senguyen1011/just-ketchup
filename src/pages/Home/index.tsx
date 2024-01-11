import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, Container, Flex, Grid, Heading, Text, Image } from '../../components';
import { Logo } from '../components';
import { fadeIn, Typewriter } from '../../animations';

const Home = () => {
  return (
    <HeroContainer
      id='home'
      mx='auto'
      py='10'
    >
      <Grid
        alignItems='center'
        columns='2fr 3fr'
        gap='10'
      >
        <Flex
          as={motion.div}
          direction='column'
          gap='4'
          initial='hidden'
          animate='visible'
          variants={fadeIn({ duration: 0.8, delay: 0, direction: 'left' })}
        >
          <Flex direction='column'>
            <Logo size='4' />
            <Heading size='display'>
              <Typewriter
                height={2}
                delay={0.8}
              >
                This is a tagline
              </Typewriter>
            </Heading>
          </Flex>
          <Text
            color='textSecondary'
            as={motion.p}
            initial='hidden'
            animate='visible'
            variants={fadeIn({ duration: 0.8, delay: 0.4, direction: '' })}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
        <Flex
          as={motion.div}
          initial='hidden'
          animate='visible'
          variants={fadeIn({ duration: 0.8, delay: 0.4, direction: 'right' })}
        >
          <HeroImage size='5'>
            <Image
              name='fear-hunger-1.jpg'
              alt='Hero Image'
              widthAuto={false}
            />
          </HeroImage>
        </Flex>
      </Grid>
    </HeroContainer>
  );
};

const HeroContainer = styled(Container)`
  height: calc(100vh - var(--navbar-height));
`;

const HeroImage = styled(Card)`
  padding-left: 0;
  padding-right: 0;

  width: calc(100% - 3rem);

  & > img {
    width: 100%;
    transform: translateX(3rem);
    border-radius: ${props => props.theme.radius['2']};
    box-shadow: ${props => props.theme.shadow['3']};
  }
`;

export { Home };
