import 'react';
import styled from 'styled-components';
import { HeadingSize } from '../../styles';
import { Text, TextProps } from './Text';

interface HeadingProps extends Omit<TextProps, 'size'> {
  size?: HeadingSize;
}

const Heading = styled(Text)
  .withConfig({
    shouldForwardProp: prop => !['size'].includes(prop),
  })
  .attrs(props => ({
    as:
      props.size && ['1', '2', '3', '4', '5', '6'].includes(props.size)
        ? `h${props.size}`
        : 'h1',
  }))<HeadingProps>`
  font-size: ${props =>
    props.size ? props.theme.headingSize[props.size] : props.theme.headingSize['1']};
`;
Heading.displayName = 'Heading';

export { Heading };
