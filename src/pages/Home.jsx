import { useState, useEffect } from 'react';
import { fetchAPI } from '../helpers/fetchAPI';
import { MovieList } from '../components/MovieList/MovieList';

const Home = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchAPI('trends')
      .then(({ data: { results } }) => setMovies(results))
      .catch(error => console.error(error));
  }, []);
  return (
    <>
      <MovieList movies={movies} genres={genres} />
    </>
  );
};

export default Home;
