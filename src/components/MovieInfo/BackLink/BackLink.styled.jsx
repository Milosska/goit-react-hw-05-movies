import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${props => (props.section === 'true' ? '200px' : '150px')};
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
  width: ${props => (props.section === 'true' ? '200px' : '150px')};
  height: 40px;
  padding-left: 5px;
  background-color: rgb(102, 80, 165);
  border-radius: 25px;
  font-size: inherit;
  color: #ffffff;

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

  ${StyledLink}:hover &, ${StyledLink}:focus & {
    transform: translateX(0);
  }

  @media (min-width: 768px) {
    display: inline-flex;
  }
`;
