import 'react';
import styled from 'styled-components';
import { ThemeColor, FontSize } from '../../styles';

interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  align?: 'left' | 'center' | 'right' | 'justify';
  case?: 'capitalize' | 'lowercase' | 'uppercase';
  size?: FontSize;
  color?: ThemeColor;
}
const Text = styled('p').withConfig({
  shouldForwardProp: prop => !['align', 'case', 'size', 'color'].includes(prop),
})<TextProps>`
  ${props => (props.align ? `text-align: ${props.align};` : '')}
  ${props => (props.case ? `text-transform: ${props.case};` : '')}
  ${props => (props.size ? `font-size: ${props.theme.fontSize[props.size]};` : '')}
  ${props => (props.color ? `color: ${props.theme.color[props.color]};` : '')}
`;
Text.displayName = 'Text';

export type { TextProps };
export { Text };
