import { BsFillPersonFill } from 'react-icons/bs';
import { MdStars } from 'react-icons/md';
import styled from 'styled-components';

export const Card = styled.li`
  width: 90vw;
  max-height: 400px;
  padding: 10px 5px;
  border-radius: 8px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);
  background-color: #000000;
  color: #ffffff;
  text-align: left;
  font-size: 16px;

  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 650px;
    height: 300px;
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    width: 40vw;
    min-height: 300px;
  }

  @media (min-width: 1900px) {
    width: 30vw;
    font-size: 22px;
  }
`;

export const BorderContainer = styled.div`
  position: relative;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding: 10px 15px;
  border-radius: 25px;
  border: 2px solid transparent;
  transition: border 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 2px solid #38bbd8;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    height: 280px;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    min-height: 280px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  text-align: center;
  color: #38bbd8;

  @media (min-width: 768px) {
    display: block;
    width: 150px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border: 2px solid #38bbd8;
  border-radius: 50%;
  background-color: #ffffff;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const PhotoImg = styled.img`
  display: block;
  width: 110px;
  height: auto;
`;

export const PhotoIcon = styled(BsFillPersonFill)`
  width: 50px;
  height: 50px;
`;

export const RatingElem = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

export const RatingItem = styled(MdStars)`
  width: 30px;
  height: 30px;
`;

export const DateElem = styled.p`
  text-align: right;
  color: #38bbd8;
  margin-bottom: 10px;
`;

export const ContentThumb = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
