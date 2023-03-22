import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchAPI } from '../../helpers/fetchAPI';
import { BackLink } from '../MovieInfo/BackLink/BackLink';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import {
  Container,
  GalleryThumb,
  BtnThumb,
  VideoBtnThumb,
  SmallIframes,
} from './Trailers.styled';

const Trailers = () => {
  const [trailers, setTrailers] = useState([]);
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

  const handleClick = e => {
    console.log(e.target);
  };

  console.log(trailers);

  return (
    <Container>
      <BackLink
        section
        text={'Close trailers'}
        backRef={backLinkHref.current}
      />
      {trailers.length ? (
        <>
          <GalleryThumb>
            <BtnThumb onClick={handleClick}>
              {trailers.map(({ id, key, name }) => {
                return (
                  <VideoBtnThumb key={id}>
                    <SmallIframes
                      src={`https://www.youtube.com/embed/${key}`}
                      title={name}
                      allow="fullscreen"
                      className="iframes"
                    />
                  </VideoBtnThumb>
                );
              })}
            </BtnThumb>
          </GalleryThumb>
        </>
      ) : (
        <ErrorMessage text={'Sorry, video is not avaliable'} />
      )}
    </Container>
  );
};

export default Trailers;
