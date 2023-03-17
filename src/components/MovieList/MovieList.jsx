import PropTypes from 'prop-types';
import { List } from './MovieList.styled';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies, genres }) => {
  return (
    <List>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} genres={genres} />
          </li>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
