import PropTypes from 'prop-types';
import { forParseGenres } from '../../helpers/fetchAPI';
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
  return (
    <Card to={`movies/${id}`} bdimage={backdrop_path}>
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
  movie: PropTypes.object.isRequired,
};

// https://codepen.io/ryanparag/pen/oWrLPr?editors=1100
