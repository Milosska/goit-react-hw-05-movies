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

  // Endless scroll

  const handleScroll = (entries, observer) => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting);
      // if (entry.isIntersecting) {
      //   console.log('Hello!');
      // }
    });
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  let observer = new IntersectionObserver(handleScroll, observerOptions);

  const handleObserver = ref => {
    observer.observe(ref);
  };

  return (
    <>
      {isLoading && <Loader />}
      <MovieList
        movies={movies}
        genres={genres}
        handleObserver={handleObserver}
      />
    </>
  );
};

export default Home;
