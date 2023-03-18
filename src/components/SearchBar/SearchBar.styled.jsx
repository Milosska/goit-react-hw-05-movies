import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  padding: 20px 0;
  text-align: center;
`;

export const Button = styled.button`
  position: absolute;
  top: 25px;
  left: calc(50% - 135px);
  padding: 0 5px;
  background-color: transparent;
  cursor: pointer;
  border: none;

  @media (min-width: 480px) {
    left: calc(50% - 195px);
  }

  @media (min-width: 1200px) {
    left: calc(50% - 245px);
  }
`;

export const Icon = styled(FiSearch)`
  width: 30px;
  height: 30px;
  color: rgba(0, 0, 0, 0.6);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Button}:hover &, ${Button}:focus & {
    color: #38bbd8;
  }
`;

export const Input = styled.input`
  width: 280px;
  padding: 10px 15px 10px 50px;
  border: 3px solid rgba(102, 80, 165, 0.5);
  border-radius: 20px;

  :focus {
    outline-color: rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 480px) {
    width: 400px;
    padding: 10px 15px 10px 50px;
  }

  @media (min-width: 1200px) {
    width: 500px;
    padding: 10px 15px 10px 50px;
  }
`;
