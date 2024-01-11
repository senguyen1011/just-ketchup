import { HeadingSize } from '../../styles';
import { Heading, Text } from '../../components';
interface LogoProps {
  size?: HeadingSize;
}

const Logo = ({ size = '4' }: LogoProps) => {
  return (
    <Heading size={size}>
      JUST/
      <Text
        as='span'
        color='textAccent'
      >
        KETCHUP
      </Text>
    </Heading>
  );
};

export { Logo };
