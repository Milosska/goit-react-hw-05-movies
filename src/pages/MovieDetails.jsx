import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchAPI } from '../helpers/fetchAPI';
import { Loader } from '../components/Loader/Loader';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    fetchAPI('movie', abortController.signal, movieId)
      .then(({ data }) => setMovie(data))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movie && <MovieInfo backRef={backLinkHref.current} movie={movie} />}
    </>
  );
};

export default MovieDetails;
