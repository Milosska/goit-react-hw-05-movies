import { useState, useEffect } from 'react';
import { fetchAPI } from '../helpers/fetchAPI';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from '../components/Loader/Loader';

const Movies = ({ genres }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    const abortController = new AbortController();
    fetchAPI('query', abortController.signal, query)
      .then(({ data: { results } }) => setMovies(results))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
    return () => {
      abortController.abort();
    };
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.query.value.trim());
    e.target.query.value = '';
  };
  return (
    <>
      {isLoading && <Loader />}
      <SearchBar handleSubmit={handleSubmit} />
      {movies && <MovieList movies={movies} genres={genres} />}
    </>
  );
};

export default Movies;
