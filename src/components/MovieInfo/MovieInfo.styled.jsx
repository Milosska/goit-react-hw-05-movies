import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import * as placeholder from '../../images/movie-placeholder-min.jpg';

export const BgContainer = styled.div`
  width: 100%;
  height: 750px;
  padding: 30px 30px;
  background-size: contain, 85% 100%;
  background-position: left top, right top;
  background-repeat: no-repeat;
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

  outline: 2px solid red;
`;

export const TextContainer = styled.div`
  width: 40%;
  margin-right: auto;
  color: #ffffff;
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
  display: inline-flex;
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
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 42px;
  line-height: 46px;
  text-transform: uppercase;
`;

export const Genres = styled.p`
  margin-top: 10px;
  font-size: 22px;
  color: rgb(195, 173, 255);
`;

export const Description = styled.p`
  margin: 20px 0;
  font-size: 18px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AddLink = styled(Link)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
  padding: 5px 20px;
  border: 2px solid rgb(195, 173, 255);
  border-radius: 25px;
  font-size: 22px;
  background-color: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 2px solid rgb(102, 80, 165);
    background-color: rgb(102, 80, 165);
  }
`;

export const CastLink = styled(AddLink)`
  margin-right: 50px;
`;

export const ArrowIcon = styled(BsFillArrowLeftCircleFill)`
  position: relative;
  width: 30px;
  height: 30px;
  rotate: 180deg;

  transform: translateX(500%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${AddLink}:hover &, ${AddLink}:focus & {
    transform: translateX(0);
  }
`;
