import styled from 'styled-components';
import { MdMovieFilter } from 'react-icons/md';

export const Backdrop = styled.div`
  position: fixed;
  top: 10vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;
  z-index: 10;
  background-color: rgba(102, 80, 165, 0.75);
  text-align: center;
`;

export const Thumb = styled.div`
  position: relative;
  top: 25%;
`;

export const Icon = styled(MdMovieFilter)`
  width: 100px;
  height: 100px;
  color: #38bbd8;

  @media (min-width: 1200px) {
    width: 300px;
    height: 300px;
  }
`;

export const TextThumb = styled.div`
  display: flex;
  gap: 5px;
  align-items: baseline;
  width: 200px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    gap: 20px;
    width: 300px;
  }
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  color: rgb(46, 45, 45);

  @media (min-width: 1200px) {
    font-size: 42px;
    line-height: 48px;
  }
`;

export const Spinner = styled.div`
  display: flex;
  width: 150px;
  height: 100px;

  @media (min-width: 1200px) {
    width: 200px;
  }
`;

export const SpinnerDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* background-color: rgba(46, 45, 45, 0.5); */
  animation: dotsAnimation 2s infinite;

  :not(:last-child) {
    margin-right: 10px;
  }

  @media (min-width: 1200px) {
    width: 20px;
    height: 20px;
  }
  :nth-child(2) {
    animation-delay: 500ms;
  }

  :nth-child(3) {
    animation-delay: 1000ms;
  }

  @keyframes dotsAnimation {
    0% {
      transform: scale(1.2);
      background-color: rgba(46, 45, 45, 1);
    }
    100% {
      transform: scale(1);
      background-color: rgba(46, 45, 45, 0.5);
    }
  }
`;
