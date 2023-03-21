import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = '3a4b55e473acc4104e59f0b7ff241ada';

export const fetchAPI = async (endpoint, controllerSignal, ...params) => {
  const ENDPOINTS = {
    trends: `/trending/movie/day?api_key=${TOKEN}&page=${params[0]}`,
    query: `/search/movie?api_key=${TOKEN}&page=${params[0]}&query=${params[1]}`,
    movie: `/movie/${params[0]}?api_key=${TOKEN}&language=en-US`,
    cast: `/movie/${params[0]}/credits?api_key=${TOKEN}&language=en-US`,
    reviews: `/movie/${params[0]}/reviews?api_key=${TOKEN}&language=en-US}`,
    person: `/person/${params[0]}?api_key=${TOKEN}&language=en-US`,
    genres: `/genre/movie/list?api_key=${TOKEN}&language=en-US`,
  };

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
