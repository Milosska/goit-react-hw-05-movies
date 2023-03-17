import { useState, useEffect } from 'react';
import { fetchAPI } from '../helpers/fetchAPI';
import { MovieList } from '../components/MovieList/MovieList';

const Home = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    fetchAPI('trends', abortController.signal)
      .then(({ data: { results } }) => setMovies(results))
      .catch(error => console.log(error));

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <MovieList movies={movies} genres={genres} />
    </>
  );
};

export default Home;
