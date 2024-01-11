import 'react';
import styled from 'styled-components';
import { Box, BoxProps } from './Box';

const containerSizes = {
  '1': '448px',
  '2': '668px',
  '3': '880px',
  '4': '1136px',
  '5': '1496px',
}
type ContainerSize = keyof typeof containerSizes;
interface ContainerProps extends Omit<BoxProps, 'display'> {
  display?: 'none' | 'block';
  size?: ContainerSize;
}

const Container = styled(Box).withConfig({
  shouldForwardProp: prop =>
    !['display', 'size'].includes(prop),
})<ContainerProps>`
  ${props => (props.display ? `display: ${props.display};` : '')}

  width: 100%;

  @media only screen and (min-width: ${props => props.theme.breakpoint.xs}) {
    max-width: ${props => props.size && !['5', '4', '3', '2'].includes(props.size) ? containerSizes[props.size] : containerSizes['1']};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoint.sm}) {
    max-width: ${props => props.size && !['5', '4', '3'].includes(props.size) ? containerSizes[props.size] : containerSizes['2']};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoint.md}) {
    max-width: ${props => props.size && !['5', '4'].includes(props.size) ? containerSizes[props.size] : containerSizes['3']};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoint.lg}) {
    max-width: ${props => props.size && props.size !== '5' ? containerSizes[props.size] : containerSizes['4']};
  }

  @media only screen and (min-width: ${props => props.theme.breakpoint.xl}) {
    max-width: ${props => props.size ? containerSizes[props.size] : containerSizes['5']};
  }
`;
Container.displayName = 'Container';

export { Container };
