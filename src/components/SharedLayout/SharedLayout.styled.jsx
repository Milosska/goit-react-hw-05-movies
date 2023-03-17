import { NavLink } from 'react-router-dom';
import { SiThemoviedatabase } from 'react-icons/si';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #a1b1cb;
  background: linear-gradient(
    90.53deg,
    rgba(0, 0, 0, 0.75) 0.45%,
    rgba(102, 80, 165, 0.75) 105.51%
  );
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

export const Logo = styled(SiThemoviedatabase)`
  display: block;
  width: 70px;
  height: 70px;
`;

export const LogoLink = styled(NavLink)`
  display: block;
  padding-left: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;
  padding-left: 500px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding: 30px 0;

  &.active {
    ::after {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 30px;
      background-color: #38bbd8;
    }
  }
`;

export const Footer = styled.footer`
  background-color: #161214;
  color: #ffffff;
`;

export const FooterContainer = styled.div`
  text-align: center;
  padding: 20px 30px;
`;
