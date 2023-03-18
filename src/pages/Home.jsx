import { useState, useEffect } from 'react';
import { fetchAPI } from '../helpers/fetchAPI';
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from '../components/Loader/Loader';

const Home = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const abortController = new AbortController();
    fetchAPI('trends', abortController.signal)
      .then(({ data: { results } }) => setMovies(results))
      .catch(error => console.log(error))
      .finally(setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <MovieList movies={movies} genres={genres} />
    </>
  );
};

export default Home;
