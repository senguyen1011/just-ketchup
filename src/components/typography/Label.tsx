import 'react';
import styled from 'styled-components';
import { ThemeColor, FontSize } from '../../styles';

interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  align?: 'left' | 'center' | 'right' | 'justify';
  case?: 'capitalize' | 'lowercase' | 'uppercase';
  size?: FontSize;
  color?: ThemeColor;
}
const Label = styled('label').withConfig({
  shouldForwardProp: prop => !['align', 'case', 'size', 'color'].includes(prop),
})<LabelProps>`
  ${props => (props.align ? `text-align: ${props.align};` : '')}
  ${props => (props.case ? `text-transform: ${props.case};` : '')}
  ${props => (props.size ? `font-size: ${props.theme.fontSize[props.size]};` : '')}
  color: ${props =>
    props.color ? props.theme.color[props.color] : props.theme.color['textSecondary']};
`;
Label.displayName = 'Label';

export { Label };
