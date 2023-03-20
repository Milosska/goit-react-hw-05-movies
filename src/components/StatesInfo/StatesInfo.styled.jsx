import {
  BsFillPeopleFill,
  BsFillStarFill,
  BsFillCameraReelsFill,
} from 'react-icons/bs';
import styled from 'styled-components';

export const StatisticContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
`;

export const PopularityIcon = styled(BsFillPeopleFill)`
  width: 50px;
  height: 50px;
`;

export const StarIcon = styled(BsFillStarFill)`
  width: 50px;
  height: 50px;
`;

export const CameraIcon = styled(BsFillCameraReelsFill)`
  width: 50px;
  height: 50px;
`;

export const StatText = styled.p`
  font-size: 18px;
`;

export const StatData = styled.span`
  display: block;
  margin-top: 5px;
  font-weight: 700;
`;
