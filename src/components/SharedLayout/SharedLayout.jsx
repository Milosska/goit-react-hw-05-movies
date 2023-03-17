import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  StyledLink,
  LogoLink,
  Logo,
  Navigation,
  Footer,
  FooterContainer,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <Navigation>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Navigation>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer>
        <FooterContainer>
          <p>&#169; 2023 Milosska - GoIT-react-project. All rights reserved</p>
        </FooterContainer>
      </Footer>
    </>
  );
};
