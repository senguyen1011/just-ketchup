import 'react';
import styled from 'styled-components';
import { Space } from '../../styles';
import { Box, BoxProps } from './Box';

interface GridProps extends Omit<BoxProps, 'display'> {
  display?: 'none' | 'inline-grid' | 'grid';
  columns?: string;
  rows?: string;
  flow?: 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense';
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  gap?: Space;
  gapX?: Space;
  gapY?: Space;
}

const Grid = styled(Box).withConfig({
  shouldForwardProp: prop =>
    ![
      'display',
      'columns',
      'rows',
      'flow',
      'alignItems',
      'alignContent',
      'justifyItems',
      'justifyContent',
      'gap',
      'gapX',
      'gapY',
    ].includes(prop),
})<GridProps>`
  ${props => (props.display ? `display: ${props.display};` : 'display: grid;')};
  ${props => (props.columns ? `grid-template-columns: ${props.columns};` : '')};
  ${props => (props.rows ? `grid-template-rows: ${props.rows};` : '')};
  ${props => (props.flow ? `grid-auto-flow: ${props.flow};` : '')};
  ${props => (props.alignItems ? `align-items: ${props.alignItems};` : '')};
  ${props => (props.alignContent ? `align-content: ${props.alignContent};` : '')};
  ${props => (props.justifyItems ? `justify-items: ${props.justifyItems};` : '')};
  ${props => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')};
  ${props => (props.gap ? `gap: ${props.theme.space[props.gap]};` : '')};
  ${props => (props.gapX ? `column-gap: ${props.theme.space[props.gapX]};` : '')};
  ${props => (props.gapY ? `row-gap: ${props.theme.space[props.gapY]};` : '')};
`;
Grid.displayName = 'Grid';

export { Grid };
