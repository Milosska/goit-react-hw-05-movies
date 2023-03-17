import { Routes, Route } from 'react-router-dom';
import 'modern-normalize';
import { GlobalStyles } from './GlobalStyles';
import { useState, useEffect } from 'react';
import { fetchAPI } from '../helpers/fetchAPI';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

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
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home genres={genres} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
