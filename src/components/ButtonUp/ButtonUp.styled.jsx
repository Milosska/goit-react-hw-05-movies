import { BsArrowUpCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 10px;
  right: 30px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 0;
  border-radius: 50%;
  background-color: #ffffff;
  border: none;

  @media (min-width: 768px) {
    bottom: 20px;
    right: 50px;
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1900px) {
    width: 100px;
    height: 100px;
  }

  &.is-hidden {
    display: none;
  }
`;

export const Icon = styled(BsArrowUpCircleFill)`
  width: 50px;
  height: 50px;
  color: rgb(102, 80, 165);

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1900px) {
    width: 100px;
    height: 100px;
  }
`;
