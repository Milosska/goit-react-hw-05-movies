import PropTypes from 'prop-types';
import {
  StatisticContainer,
  StatText,
  PopularityIcon,
  StarIcon,
  CameraIcon,
  StatData,
  StatContainer,
} from './StatesInfo.styled';

export const StatesInfo = ({ popularity, vote_average, status }) => {
  return (
    <StatisticContainer>
      <StatContainer>
        <PopularityIcon />
        <StatText>
          Popularity: <StatData>{popularity}</StatData>
        </StatText>
      </StatContainer>
      <StatContainer>
        <StarIcon />
        <StatText>
          Vote average:<StatData>{vote_average}</StatData>
        </StatText>
      </StatContainer>
      <StatContainer>
        <CameraIcon />
        <StatText>
          Status: <StatData>{status}</StatData>
        </StatText>
      </StatContainer>
    </StatisticContainer>
  );
};

StatesInfo.propTypes = {
  popularity: PropTypes.number,
  vote_average: PropTypes.number,
  status: PropTypes.string,
};
