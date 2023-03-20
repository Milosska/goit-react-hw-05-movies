import { AiOutlineStop } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 500px;
  max-height: 280px;
  margin-top: 20px;
  padding: 10px 20px;
  /* background-color: rgba(189, 171, 239, 0.5); */
  border: 2px solid transparent;
  border-radius: 25px;
  transition: border 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 2px solid #38bbd8;
  }
`;

export const TitleText = styled.p`
  padding-top: 20px;
  font-size: 18px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 30px;
  max-height: 280px;
  list-style: none;
  margin: 0;
  padding: 0 10px;
`;

export const ListElem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 5px;
  }

  :not(:first-child) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 2px solid #38bbd8;
  border-radius: 50%;
  background-color: #ffffff;
`;

export const LogoPlaceholder = styled(AiOutlineStop)`
  width: 30px;
  height: 30px;
  color: #000000;
`;

export const CompanyLogo = styled.img`
  width: 50px;
  height: 30px;
`;

export const CompanyName = styled.p`
  font-size: 18px;
`;

export const ArrowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 10px 0 auto auto;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
`;

export const ArrowIcon = styled(BsFillArrowLeftCircleFill)`
  width: 40px;
  height: 40px;
  transform: rotate(-90deg);
  color: transparent;

  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Container}:hover &, ${Container}:focus & {
    color: #38bbd8;
  }
`;
