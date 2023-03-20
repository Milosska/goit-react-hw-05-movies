import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import * as placeholder from '../../images/movie-placeholder-min.jpg';

export const BgContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 20px 0;
  background-size: contain, 100% 300px;
  background-position: left top, right top;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(102, 80, 165, 0.5) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.95) 55%,
      rgba(0, 0, 0, 1) 100%
    ),
    ${BgContainer => {
      if (!BgContainer.bdimage) {
        return `url(${placeholder.default})`;
      }
      return `url(https://image.tmdb.org/t/p/original/${BgContainer.bdimage})`;
    }};

  @media (min-width: 480px) {
    background-size: contain, 100% 65%;
  }

  @media (min-width: 768px) {
    background-size: contain, 85% 100%;
    padding: 30px 20px;
    height: 600px;
    background-image: linear-gradient(
        to left,
        rgba(102, 80, 165, 0.5) 0%,
        rgba(0, 0, 0, 0.6) 50%,
        rgba(0, 0, 0, 0.95) 80%,
        rgba(0, 0, 0, 1) 100%
      ),
      ${BgContainer => {
        if (!BgContainer.bdimage) {
          return `url(${placeholder.default})`;
        }
        return `url(https://image.tmdb.org/t/p/original/${BgContainer.bdimage})`;
      }};

    @media (min-width: 1200px) {
      height: 800px;
      padding: 30px 30px;
    }
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 55%;
    padding: 0;
    margin-right: auto;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const BackLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 150px;
  height: 40px;
  border-radius: 25px;
  overflow: hidden;
`;

export const BackIcon = styled(BsFillArrowLeftCircleFill)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 40px;
  height: 40px;
  color: rgb(102, 80, 165);
`;

export const BackHoverText = styled.span`
  display: none;
  align-items: center;
  gap: 20px;
  width: 150px;
  height: 40px;
  padding-left: 5px;
  background-color: rgb(102, 80, 165);
  border-radius: 25px;
  font-size: 16px;

  ::before {
    display: block;
    content: '';
    width: 30px;
    height: 80%;
    background-color: #ffffff;
    border-radius: 25px;
  }

  transform: translateX(-100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${BackLink}:hover &, ${BackLink}:focus & {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    display: inline-flex;
  }
`;

export const Title = styled.h2`
  margin-top: 100px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;

  @media (min-width: 480px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 42px;
    line-height: 46px;
  }
`;

export const Genres = styled.p`
  margin-top: 5px;
  font-size: 16px;
  color: rgb(195, 173, 255);

  @media (min-width: 768px) {
    margin-top: 10px;
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  margin: 10px 0;
  font-size: 14px;

  @media (min-width: 768px) {
    margin: 20px 0;
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const LinkThumb = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const AddLink = styled(Link)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  padding: 5px 10px 5px 10px;
  border: 2px solid rgb(195, 173, 255);
  border-radius: 25px;
  font-size: 16px;
  background-color: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 2px solid rgb(102, 80, 165);
    background-color: rgb(102, 80, 165);
  }

  @media (min-width: 1200px) {
    margin-top: 30px;
    /* padding: 5px 20px 5px 10px; */
    font-size: 22px;
  }
`;

export const CastLink = styled(AddLink)`
  margin-right: 20px;

  @media (min-width: 1200px) {
    margin-right: 50px;
  }
`;

export const ArrowIcon = styled(BsFillArrowLeftCircleFill)`
  position: relative;
  z-index: 1;
  width: 20px;
  height: 20px;
  rotate: 180deg;

  transform: translateX(200%);
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${AddLink}:hover &, ${AddLink}:focus & {
    transform: translateX(0);
  }

  @media (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;
