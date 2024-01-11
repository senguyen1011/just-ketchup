import 'react';
import styled from 'styled-components';
import { Space } from '../../styles';
import { Box, BoxProps } from './Box';

interface FlexProps extends Omit<BoxProps, 'display'> {
  display?: 'none' | 'inline-flex' | 'flex';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between';
  justifyContent?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: Space;
}

const Flex = styled(Box).withConfig({
  shouldForwardProp: prop =>
    !['display', 'direction', 'alignItems', 'alignContent', 'justifyContent', 'wrap', 'gap'].includes(prop),
})<FlexProps>`
  ${props => (props.display ? `display: ${props.display};` : 'display: flex;')};
  ${props => (props.direction ? `flex-direction: ${props.direction};` : '')};
  ${props => (props.alignItems ? `align-items: ${props.alignItems};` : '')};
  ${props => (props.alignContent ? `align-content: ${props.alignContent};` : '')};
  ${props => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')};
  ${props => (props.wrap ? `flex-wrap: ${props.wrap};` : '')};
  ${props => (props.gap ? `gap: ${props.theme.space[props.gap]};` : '')};
`;
Flex.displayName = 'Flex';

export { Flex };
