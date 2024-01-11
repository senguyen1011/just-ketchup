import 'react';
import styled from 'styled-components';
import expandMoreDark from './assets/expandMoreDark.svg';
import expandMoreLight from './assets/expandMoreLight.svg';

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: '4' | '3' | '2' | '1';
}

const Select = styled('select').withConfig({
  shouldForwardProp: prop => !['size'].includes(prop),
})<SelectProps>`
  ${props => {
    if (props.size && props.size === '4') {
      return `
          height: ${props.theme.space['8']};
          padding: 0 ${props.theme.space['4']};
          font-size: ${props.theme.fontSize['3']};
        `;
    } else if (props.size && props.size === '2') {
      return `
          height: ${props.theme.space['6']};
          padding: 0 ${props.theme.space['3']};
          font-size: ${props.theme.fontSize['5']};
        `;
    } else if (props.size && props.size === '1') {
      return `
          height: ${props.theme.space['5']};
          padding: 0 ${props.theme.space['2']};
          font-size: ${props.theme.fontSize['6']};
        `;
    } else {
      return `
          height: ${props.theme.space['7']};
          padding: 0 ${props.theme.space['4']};
          font-size: ${props.theme.fontSize['4']};
        `;
    }
  }}

  -webkit-appearance: none;
  -mos-appearance: none;
  background-image: url(${props =>
    props.theme.theme === 'dark' ? expandMoreDark : expandMoreLight});
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 55%;
  padding-inline-end: ${props => props.theme.space['5']};
  color: ${props => props.theme.color['text']};
  background-color: ${props => props.theme.color['inputBackground']};
  border-radius: ${props => props.theme.radius['3']};
  border: 1px solid ${props => props.theme.color['gray']['border']};
  transition: border-color ${props => props.theme.duration['2']}s ease-in-out,
    box-shadow ${props => props.theme.duration['2']}s ease-in-out;

  &:hover {
    border-color: ${props => props.theme.color['gray']['borderSecondary']};
  }

  &:focus {
    border-color: ${props => props.theme.color['accent']['focusRing']};
    box-shadow: 0 0 0 3px ${props => props.theme.color['bodyBackground']},
      0 0 0 4px ${props => props.theme.color['accent']['focusRing']};
  }

  & > option {
    background-color: ${props => props.theme.color['inputBackground']};
  }
`;
Select.displayName = 'Select';

export { Select };
