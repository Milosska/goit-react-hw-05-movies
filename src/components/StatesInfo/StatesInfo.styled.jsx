import {
  BsFillPeopleFill,
  BsFillStarFill,
  BsFillCameraReelsFill,
} from 'react-icons/bs';
import styled from 'styled-components';

export const StatisticContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  @media (min-width: 768px) {
    justify-content: start;
  }

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
    gap: 25px;
  }
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (min-width: 480px) {
    padding: 5px 0;
  }

  @media (min-width: 768px) {
    padding: 10px 0;
  }
`;

export const PopularityIcon = styled(BsFillPeopleFill)`
  width: 30px;
  height: 30px;

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const StarIcon = styled(BsFillStarFill)`
  width: 30px;
  height: 30px;

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const CameraIcon = styled(BsFillCameraReelsFill)`
  width: 30px;
  height: 30px;

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const StatText = styled.p`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const StatData = styled.span`
  display: block;
  margin-top: 5px;
  font-weight: 700;
`;
