import 'react';
import styled from 'styled-components';
import { Color } from '../../styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: '4' | '3' | '2' | '1';
  color?: Color;
  variant?: 'soft';
}

const Button = styled('button').withConfig({
  shouldForwardProp: prop => !['size'].includes(prop),
})<ButtonProps>`
  ${props => {
    if (props.size && props.size === '4') {
      return `
          height: ${props.theme.space['8']};
          padding: 0 ${props.theme.space['4']};
          font-size: ${props.theme.fontSize['3']};
          gap: ${props.theme.space['3']};
        `;
    } else if (props.size && props.size === '2') {
      return `
          height: ${props.theme.space['6']};
          padding: 0 ${props.theme.space['3']};
          font-size: ${props.theme.fontSize['5']};
          gap: ${props.theme.space['1']};
        `;
    } else if (props.size && props.size === '1') {
      return `
          height: ${props.theme.space['5']};
          padding: 0 ${props.theme.space['2']};
          font-size: ${props.theme.fontSize['6']};
          gap: ${props.theme.space['1']};
        `;
    } else {
      return `
          height: ${props.theme.space['7']};
          padding: 0 ${props.theme.space['4']};
          font-size: ${props.theme.fontSize['4']};
          gap: ${props.theme.space['2']};
        `;
    }
  }}

  ${props => {
    if (props.variant && props.variant === 'soft') {
      return ``;
    } else {
      return `
        color: ${props.theme.color['textSecondary']};
        background-color: ${props.theme.color['buttonBackground']};
        border-color: ${props.theme.color['buttonBackground']};

        &:hover {
          color: ${props.theme.color[props.color ? props.color : 'gray']['buttonText']};
          background-color: ${props.theme.color['buttonBackgroundSecondary']};
          border: 1px solid ${props.theme.color['buttonBackgroundSecondary']};
        }

        &:focus {
          color: ${
            props.theme.color[props.color ? props.color : 'gray']['buttonTextSecondary']
          };
          background-color: ${
            props.theme.color[props.color ? props.color : 'gray']['buttonBackground']
          };
          border-color: ${
            props.theme.color[props.color ? props.color : 'gray']['buttonBackground']
          };
        }

        &:active {
          box-shadow: 0 0 0 3px ${props.theme.color['bodyBackground']},
          0 0 0 4px ${props.theme.color[props.color ? props.color : 'gray']['8']};
          color: ${
            props.theme.color[props.color ? props.color : 'gray']['buttonTextSecondary']
          };
          background-color: ${
            props.theme.color[props.color ? props.color : 'gray']['buttonBackground']
          };
          border-color: ${
            props.theme.color[props.color ? props.color : 'gray']['buttonBackground']
          };
        }
      `;
    }
  }}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code', monospace;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-radius: ${props => props.theme.radius['2']};
  transition: color ${props => props.theme.duration['2']}s ease-in-out,
    background ${props => props.theme.duration['2']}s ease-in-out,
    border-color ${props => props.theme.duration['2']}s ease-in-out,
    box-shadow ${props => props.theme.duration['2']}s ease-in-out;
  cursor: pointer;
`;
Button.displayName = 'Button';

export { Button };
