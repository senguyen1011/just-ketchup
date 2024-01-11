import styled from 'styled-components';

const BodyLines = styled.div`
  position: fixed;
  height: 100%;
  min-height: 100%;
  width: ${props => props.theme.breakpoint['lg']};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid ${props => props.theme.color['gray']['border']};
  border-top: none;
  border-bottom: none;
  z-index: -100;
`;

const BodyLineFade = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    ${props =>
      `${props.theme.color['bodyBackground']} 10%, ${props.theme.color['bodyBackground']}00`}
  );
  z-index: -99;
`;

export { BodyLines, BodyLineFade };
