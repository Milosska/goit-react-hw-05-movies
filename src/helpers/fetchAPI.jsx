import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = '3a4b55e473acc4104e59f0b7ff241ada';
const ENDPOINTS = {
  trends: `/trending/movie/day?api_key=${TOKEN}`,
  query: '/search/search-movies',
  movie: '/movies/get-movie-details',
  cast: '/movies/get-movie-credits',
  reviews: '/movies/get-movie-reviews',
  genres: `/genre/movie/list?api_key=${TOKEN}&language=en-US`,
};

export const fetchAPI = async (endpoint, controllerSignal) => {
  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINTS[endpoint]}`, {
      signal: controllerSignal,
    });
    // console.log(response);
    return response;
  } catch (error) {
    if (axios.isCancel) {
      console.log('Request canceled');
      return;
    }

    console.error(error);
  }
};

export const forParseGenres = (idArray, movieGenresId) => {
  let genresNameArray = [];

  idArray.forEach(genre => {
    if (movieGenresId.includes(genre.id)) {
      genresNameArray.push(' ' + genre.name);
    }
    return genresNameArray;
  });

  if (movieGenresId.length === 0) {
    return ' ';
  }

  if (movieGenresId.length > 2) {
    return `${genresNameArray[0]}, ${genresNameArray[1]}, other`;
  }

  return genresNameArray.join(', ');
};
