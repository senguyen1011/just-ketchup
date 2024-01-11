import 'react';
import styled from 'styled-components';

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: '4' | '3' | '2' | '1';
}
interface TextInputWrapperProps {
  size?: '4' | '3' | '2' | '1';
}

const TextInputBase = styled.div`
  color: ${props => props.theme.color['text']};
  background-color: ${props => props.theme.color['inputBackground']};
  border-radius: ${props => props.theme.radius['3']};
  border: 1px solid ${props => props.theme.color['gray']['border']};
  transition: border-color ${props => props.theme.duration['2']}s ease-in-out,
    box-shadow ${props => props.theme.duration['2']}s ease-in-out;
`;

const TextInput = styled(TextInputBase)
  .withConfig({
    shouldForwardProp: prop => !['size'].includes(prop),
  })
  .attrs(() => ({ as: 'input', type: 'text' }))<TextInputProps>`
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

  &:hover {
    border-color: ${props => props.theme.color['gray']['borderSecondary']};
  }

  &:focus {
    border-color: ${props => props.theme.color['accent']['focusRing']};
    box-shadow: 0 0 0 3px ${props => props.theme.color['bodyBackground']}, 0 0 0 4px ${props =>
  props.theme.color['accent']['focusRing']};
  }
`;
TextInput.displayName = 'TextInput';

const TextInputRoot = ({size, children} : {
  size?: '4' | '3' | '2' | '1';
  children?: string | JSX.Element | JSX.Element[]
}) => (
  <TextInputWrapper size={size}>
    {children}
    <TextInputChrome />
  </TextInputWrapper>
);
TextInputRoot.displayName = 'TextInputRoot';

const TextInputSlot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  color: ${props => props.theme.color['grayText']};
`;

const TextInputChrome = styled(TextInputBase)`
  position: absolute;
  z-index: 0;
  inset: 0;
`;

const TextInputWrapper = styled.div<TextInputWrapperProps>`
  position: relative;
  display: flex;
  z-index: 0;
  cursor: text;

  ${TextInput} {
    width: 100%;
    z-index: 1;
    border: none;
    background: none;
    padding: 0;

    &:hover {
      border: none;
    }

    &:focus {
      border: none;
      box-shadow: none;
    }
  }

  &:has(${TextInput}:hover) {
    ${TextInputChrome} {
      border-color: ${props => props.theme.color['gray']['borderSecondary']};
    }
  }

  &:has(${TextInput}:focus) {
    ${TextInputChrome} {
      border-color: ${props => props.theme.color['accent']['focusRing']};
      box-shadow: 0 0 0 3px ${props => props.theme.color['bodyBackground']},
        0 0 0 4px ${props => props.theme.color['accent']['focusRing']};
    }
  }

  ${TextInputSlot} {
    ${props => {
      if (props.size && props.size === '4') {
        return `
          gap: ${props.theme.space['3']};
          padding-left: ${props.theme.space['3']};
          padding-right: ${props.theme.space['3']};
          `;
      } else if (props.size && props.size === '2') {
        return `
          gap: ${props.theme.space['1']};
          padding-left: ${props.theme.space['1']};
          padding-right: ${props.theme.space['1']};
          `;
      } else if (props.size && props.size === '1') {
        return `
          gap: ${props.theme.space['1']};
          padding-left: ${props.theme.space['1']};
          padding-right: ${props.theme.space['1']};
        `;
      } else {
        return `
          gap: ${props.theme.space['2']};
          padding-left: ${props.theme.space['2']};
          padding-right: ${props.theme.space['2']};
        `;
      }
    }}
  }
`;

export { TextInput, TextInputRoot, TextInputSlot };
