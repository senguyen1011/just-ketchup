import styled from 'styled-components';
import { Button, Flex, Grid } from '../../components';

const Navbar = () => {
  return (
    <NavbarWrapper
      columns='3fr 2fr 3fr'
      id='navbar'
    >
      <Flex></Flex>
      <Grid
        columns='1fr 1rem 1fr 1rem 1fr'
        alignItems='center'
      >
        <NavbarLink
          color='accent'
          as='a'
          href='#home'
          data-to-scrollspy-id='home'
        >
          HOME
        </NavbarLink>
        <Line />
        <NavbarLink
          color='accent'
          as='a'
          href="#work"
          data-to-scrollspy-id='work'
        >
          WORK
        </NavbarLink>
        <Line />
        <Button
          color='accent'
          as='a'
        >
          CONTACT
        </Button>
      </Grid>
      <Flex></Flex>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled(Grid)`
  position: sticky;
  height: var(--navbar-height);
`;

const Line = styled.span`
  width: 100%;
  height: 1px;
  border-top: 2px solid ${props => props.theme.color['gray']['border']};
`;

const NavbarLink = styled(Button)`
  &.active-scroll-spy {
    color: ${props => props.theme.color['accent']['buttonTextSecondary']};
    background-color: ${props => props.theme.color['accent']['buttonBackground']};
    border-color: ${props => props.theme.color['accent']['buttonBackground']};
  }
`;

export { Navbar };
