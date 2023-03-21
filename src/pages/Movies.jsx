import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAPI } from '../helpers/fetchAPI';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from '../components/Loader/Loader';
import { ButtonUp } from '../components/ButtonUp/ButtonUp';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

const Movies = ({ genres }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(() => searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    const abortController = new AbortController();
    fetchAPI('query', abortController.signal, page, query)
      .then(({ data: { results } }) => {
        if (!results.length) {
          setError(true);
          return;
        }

        page === 1
          ? setMovies([...results])
          : setMovies(prevState => [...prevState, ...results]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.query.value.trim());
    e.target.query.value = '';
    setPage(1);
    setError(false);
  };
  return (
    <>
      {isLoading && <Loader />}
      <SearchBar
        handleSubmit={handleSubmit}
        setSearchParams={setSearchParams}
      />
      {movies && !isError && (
        <MovieList movies={movies} genres={genres} setPage={setPage} />
      )}
      {window.pageYOffset > 500 && <ButtonUp />}
      {isError && (
        <ErrorMessage
          text={'Oops, something went wrong. Please try another request'}
        />
      )}
    </>
  );
};

export default Movies;
