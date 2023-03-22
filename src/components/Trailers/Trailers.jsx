import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchAPI } from '../../helpers/fetchAPI';
import { BackLink } from '../MovieInfo/BackLink/BackLink';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import { Container, PlayerThumb, Player } from './Trailers.styled';

const Trailers = () => {
  const [trailers, setTrailers] = useState([]);
  const [url, setUrl] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies/:movieId');

  useEffect(() => {
    const abortController = new AbortController();
    fetchAPI('trailers', abortController.signal, movieId)
      .then(({ data: { results } }) => setTrailers(results))
      .catch(error => console.log(error));

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  useEffect(() => {
    if (trailers.length) {
      setUrl(trailers[0].key);
    }
  }, [trailers]);

  return (
    <Container>
      <BackLink
        section
        text={'Close trailers'}
        backRef={backLinkHref.current}
      />

      {trailers.length ? (
        <PlayerThumb>
          <Player
            url={`https://www.youtube.com/watch?v=${url}`}
            controls={true}
            width="100%"
            height="100%"
          />
        </PlayerThumb>
      ) : (
        <ErrorMessage text={'Sorry, trailer is not avaliable'} />
      )}
    </Container>
  );
};

export default Trailers;
