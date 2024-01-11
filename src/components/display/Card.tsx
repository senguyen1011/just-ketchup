import 'react';
import styled from 'styled-components';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: '1' | '2' | '3' | '4' | '5';
}
const Card = styled('div').withConfig({
  shouldForwardProp: prop => !['size'].includes(prop),
})<CardProps>`
  ${props => {
    if (props.size && props.size === '5') {
      return `
        padding: ${props.theme.space['8']};
      `;
    } else if (props.size && props.size === '4') {
      return `
        padding: ${props.theme.space['6']};
      `;
    } else if (props.size && props.size === '3') {
      return `
        padding: ${props.theme.space['5']};
      `;
    } else if (props.size && props.size === '2') {
      return `
        padding: ${props.theme.space['4']};
      `;
    } else {
      return `
        padding: ${props.theme.space['3']};
      `;
    }
  }}

  position: relative;
  background-color: ${props => props.theme.color['cardBackground']};
  border-radius: ${props => props.theme.radius['2']};
  backdrop-filter: blur(4px);
  box-shadow: ${props => props.theme.shadow['4']};
`;
Card.displayName = 'Card';

export { Card };
