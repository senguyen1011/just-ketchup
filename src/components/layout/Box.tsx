import 'react';
import styled from 'styled-components';
import { Space } from '../../styles';

interface BoxProps extends React.ComponentPropsWithoutRef<'div'> {
  p?: Space | 'auto';
  px?: Space | 'auto';
  py?: Space | 'auto';
  pt?: Space | 'auto';
  pr?: Space | 'auto';
  pb?: Space | 'auto';
  pl?: Space | 'auto';
  m?: Space | 'auto';
  mx?: Space | 'auto';
  my?: Space | 'auto';
  mt?: Space | 'auto';
  mr?: Space | 'auto';
  mb?: Space | 'auto';
  ml?: Space | 'auto';
  width?: 'auto' | 'min-content' | 'max-content' | '100%' | Space;
  height?: 'auto' | 'min-content' | 'max-content' | '100%' | Space;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  display?: 'none' | 'inline' | 'inline-block' | 'block';
}
const Box = styled('div').withConfig({
  shouldForwardProp: prop =>
    ![
      'p',
      'px',
      'py',
      'pt',
      'pr',
      'pb',
      'pl',
      'm',
      'mx',
      'my',
      'mt',
      'mr',
      'mb',
      'ml',
      'width',
      'height',
      'position',
      'display',
    ].includes(prop),
})<BoxProps>`
  ${props =>
    props.p
      ? props.p === 'auto'
        ? `padding: ${props.p};`
        : `padding: ${props.theme.space[props.p]};`
      : ''}
  ${props =>
    props.px
      ? props.px === 'auto'
        ? `padding-left: ${props.px}; padding-right: ${props.px};`
        : `padding-left: ${props.theme.space[props.px]}; padding-right: ${
            props.theme.space[props.px]
          };`
      : ''}
  ${props =>
    props.py
      ? props.py === 'auto'
        ? `padding-top: ${props.py}; padding-bottom: ${props.py};`
        : `padding-top: ${props.theme.space[props.py]}; padding-bottom: ${
            props.theme.space[props.py]
          };`
      : ''}
  ${props =>
    props.pt
      ? props.pt === 'auto'
        ? `padding-top: ${props.pt};`
        : `padding-top: ${props.theme.space[props.pt]};`
      : ''}
  ${props =>
    props.pr
      ? props.pr === 'auto'
        ? `padding-right: ${props.pr};`
        : `padding-right: ${props.theme.space[props.pr]};`
      : ''}
  ${props =>
    props.pb
      ? props.pb === 'auto'
        ? `padding-bottom: ${props.pb};`
        : `padding-bottom: ${props.theme.space[props.pb]};`
      : ''}
  ${props =>
    props.pl
      ? props.pl === 'auto'
        ? `padding-left: ${props.pl};`
        : `padding-left: ${props.theme.space[props.pl]};`
      : ''}

  ${props =>
    props.m
      ? props.m === 'auto'
        ? `margin: ${props.m};`
        : `margin: ${props.theme.space[props.m]};`
      : ''}
  ${props =>
    props.mx
      ? props.mx === 'auto'
        ? `margin-left: ${props.mx}; margin-right: ${props.mx};`
        : `margin-left: ${props.theme.space[props.mx]}; margin-right: ${
            props.theme.space[props.mx]
          };`
      : ''}
  ${props =>
    props.my
      ? props.my === 'auto'
        ? `margin-top: ${props.my}; margin-bottom: ${props.my};`
        : `margin-top: ${props.theme.space[props.my]}; margin-bottom: ${
            props.theme.space[props.my]
          };`
      : ''}
  ${props =>
    props.mt
      ? props.mt === 'auto'
        ? `margin-top: ${props.mt};`
        : `margin-top: ${props.theme.space[props.mt]};`
      : ''}
  ${props =>
    props.mr
      ? props.mr === 'auto'
        ? `margin-right: ${props.mr};`
        : `margin-right: ${props.theme.space[props.mr]};`
      : ''}
  ${props =>
    props.mb
      ? props.mb === 'auto'
        ? `margin-bottom: ${props.mb};`
        : `margin-bottom: ${props.theme.space[props.mb]};`
      : ''}
  ${props =>
    props.ml
      ? props.ml === 'auto'
        ? `margin-left: ${props.ml};`
        : `margin-left: ${props.theme.space[props.ml]};`
      : ''}
  ${props =>
    props.width
      ? ['auto', 'min-content', 'max-content', '100%'].includes(props.width)
        ? `width: ${props.width};`
        : `width: ${props.theme.space[props.width]};`
      : ''}
  ${props =>
    props.height
      ? ['auto', 'min-content', 'max-content', '100%'].includes(props.height)
        ? `height: ${props.width};`
        : `height: ${props.theme.space[props.height]};`
      : ''}
  ${props => (props.position ? `position: ${props.position};` : '')};
  ${props => (props.display ? `display: ${props.display};` : '')};
`;
Box.displayName = 'Box';

export type {BoxProps}
export { Box };
