import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { List, ObserverDiv } from './MovieList.styled';
import { MovieCard } from './MovieCard/MovieCard';

export const MovieList = ({ movies, genres, setPage }) => {
  const observerRef = useRef();

  useEffect(() => {
    // Endless scroll

    const observerElem = observerRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    let observer = new IntersectionObserver(handleScroll, observerOptions);

    if (observerElem) {
      observer.observe(observerElem);
    }

    function handleScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setPage(prevState => prevState + 1);
          return;
        }
      });

      window.scrollBy(0, -100);
    }

    return () => {
      observer.unobserve(observerElem);
    };
  }, [setPage]);

  return (
    <>
      <List>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <MovieCard movie={movie} genres={genres} />
            </li>
          );
        })}
      </List>
      <ObserverDiv ref={observerRef}></ObserverDiv>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPage: PropTypes.func.isRequired,
};
