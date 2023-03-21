import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { forParseGenres } from '../../../helpers/fetchAPI';
import {
  Card,
  TextContainer,
  Title,
  Genres,
  Description,
} from './MovieCard.styled';

export const MovieCard = ({
  genres,
  movie: { id, title, overview, genre_ids, release_date, backdrop_path },
}) => {
  const location = useLocation();
  return (
    <Card
      to={`/movies/${id}`}
      state={{ from: location }}
      bdimage={backdrop_path}
    >
      <TextContainer>
        <Title>{title}</Title>
        <Genres>
          {release_date && <span>{`(${release_date.split('-')[0]})`}</span>}
          {forParseGenres(genres, genre_ids)}
        </Genres>
        <Description>{overview}</Description>
      </TextContainer>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    release_date: PropTypes.string,
    backdrop_path: PropTypes.string,
  }).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// https://codepen.io/ryanparag/pen/oWrLPr?editors=1100
