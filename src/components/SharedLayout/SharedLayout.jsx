import { Outlet } from 'react-router-dom';
import {
  HeaderThumb,
  Header,
  Container,
  StyledLink,
  LogoLink,
  Logo,
  Navigation,
  Main,
  Footer,
  FooterContainer,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderThumb>
            <LogoLink to="/">
              <Logo />
            </LogoLink>
            <Navigation>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </Navigation>
          </HeaderThumb>
        </Container>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <Container>
          <FooterContainer>
            <p>
              &#169; 2023 Milosska - GoIT-react-project. All rights reserved
            </p>
          </FooterContainer>
        </Container>
      </Footer>
    </>
  );
};
