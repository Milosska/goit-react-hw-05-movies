import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchAPI } from '../helpers/fetchAPI';
import { Loader } from '../components/Loader/Loader';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { ButtonUp } from '../components/ButtonUp/ButtonUp';

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
      {window.pageYOffset > 1000 && <ButtonUp />}
      {movie && <MovieInfo backRef={backLinkHref.current} movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
