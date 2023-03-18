import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';

const Movies = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // setIsLoading(true);
    // const abortController = new AbortController();
    // fetchAPI('trends', abortController.signal)
    //   .then(({ data: { results } }) => setMovies(results))
    //   .catch(error => console.log(error))
    //   .finally(setIsLoading(false));
    // return () => {
    //   abortController.abort();
    // };
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.query.value.trim());
    e.target.query.value = '';
  };
  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
    </>
  );
};

export default Movies;
