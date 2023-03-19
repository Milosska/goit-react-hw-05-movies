import { useState, useEffect } from 'react';
import { fetchAPI } from '../helpers/fetchAPI';
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from '../components/Loader/Loader';
import { ButtonUp } from '../components/ButtonUp/ButtonUp';

const Home = ({ genres }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (page === 0) {
      return;
    }

    setIsLoading(true);

    const abortController = new AbortController();
    fetchAPI('trends', abortController.signal, page)
      .then(({ data: { results } }) =>
        page === 1
          ? setMovies([...results])
          : setMovies(prevState => [...prevState, ...results])
      )
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, [page]);

  return (
    <>
      {isLoading && <Loader />}
      {window.pageYOffset > 500 && <ButtonUp />}
      <MovieList movies={movies} genres={genres} setPage={setPage} />
    </>
  );
};

export default Home;
