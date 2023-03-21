import styled from 'styled-components';
import * as placeholder from '../../../images/person-placeholder.webp';

export const Card = styled.div`
  position: relative;
  display: block;
  width: 90vw;
  min-height: 400px;
  overflow: hidden;
  padding: 10px 30px;

  background-size: contain, 100% 80%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(102, 80, 165, 0.5) 0%,
      rgba(0, 0, 0, 0.6) 40%,
      rgba(0, 0, 0, 0.95) 60%,
      rgba(0, 0, 0, 1) 100%
    ),
    ${card => {
      if (!card.bdimage) {
        return `url(${placeholder.default})`;
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

  @media (min-width: 480px) {
    padding: 20px 30px;
    background-size: contain, 55% 100%;
    background-image: linear-gradient(
        to right,
        rgba(102, 80, 165, 0.5) 0%,
        rgba(0, 0, 0, 0.6) 40%,
        rgba(0, 0, 0, 0.95) 50%,
        rgba(0, 0, 0, 1) 100%
      ),
      ${card => {
        if (!card.bdimage) {
          return `url(${placeholder.default})`;
        }
        return `url(https://image.tmdb.org/t/p/w500${card.bdimage})`;
      }};
  }

  @media (min-width: 768px) {
    width: 45vw;
    min-height: 250px;
  }

  @media (min-width: 1200px) {
    width: 30vw;
    min-height: 300px;
  }
`;

export const TextContainer = styled.div`
  margin-top: 220px;

  font-family: 'Montserrat';
  font-weight: 500;
  color: #ffffff;

  @media (min-width: 480px) {
    width: 50%;
    margin-top: 0;
    margin-left: auto;
  }
`;

export const StarName = styled.h3`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const Character = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: rgb(195, 173, 255);

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
