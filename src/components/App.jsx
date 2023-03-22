import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'modern-normalize';
import { GlobalStyles } from './GlobalStyles';
import { fetchAPI } from '../helpers/fetchAPI';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from '../components/Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Trailers = lazy(() => import('./Trailers/Trailers'));

export const App = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchAPI('genres')
      .then(({ data: { genres } }) => setGenres(genres))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home genres={genres} />} />
            <Route path="movies" element={<Movies genres={genres} />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="trailers" element={<Trailers />} />
            </Route>
            <Route path="*" element={<Home genres={genres} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
