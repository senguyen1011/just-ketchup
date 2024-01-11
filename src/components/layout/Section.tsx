import 'react';
import styled from 'styled-components';
import { Box, BoxProps } from './Box';

const sectionSizes = {
  '1': '5',
  '2': '7',
  '3': '10',
};
type SectionSize = keyof typeof sectionSizes;
interface SectionProps extends Omit<BoxProps, 'display'> {
  display?: 'none' | 'block';
  size?: SectionSize;
}

const Section = styled(Box)
  .withConfig({
    shouldForwardProp: prop => !['display', 'size'].includes(prop),
  })
  .attrs(() => ({ as: 'section' }))<SectionProps>`
  ${props => (props.display ? `display: ${props.display};` : '')}

  width: 100%;

  padding-top: ${props =>
    props.size ? props.theme.space[sectionSizes[props.size]] : props.theme.space['10']};
  padding-bottom: ${props =>
    props.size ? props.theme.space[sectionSizes[props.size]] : props.theme.space['10']};
`;
Section.displayName = 'Section';

export { Section };
