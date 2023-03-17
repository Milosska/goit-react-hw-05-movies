import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(NavLink)`
  position: relative;
  display: block;
  width: 650px;
  height: 300px;
  overflow: hidden;
  padding: 20px 30px;

  background-size: contain, 80% 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      rgba(102, 80, 165, 0.5) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.95) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    ${card => {
      if (!card.bdimage) {
        return;
      }
      return `url(https://image.tmdb.org/t/p/w500${card.bdimage})`;
    }};

  border-radius: 8px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ::after {
    position: absolute;
    top: 95%;
    left: 0;
    display: inline-block;
    content: '';
    width: 100%;
    height: 5px;
    background-color: #38bbd8;

    transform: translateX(-100%);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover,
  :focus {
    transform: scale(1.05);

    ::after {
      transform: translateX(0);
    }
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  margin-left: auto;

  font-family: 'Montserrat';
  font-weight: 500;
  color: #ffffff;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;
`;

export const Genres = styled.p`
  margin-bottom: 10px;
  color: rgb(195, 173, 255);
`;

export const Description = styled.p`
  max-height: 170px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
