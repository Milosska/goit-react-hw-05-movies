import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchAPI } from '../../helpers/fetchAPI';
import { CastMember } from './CastMember/CastMember';
import { BackLink } from '../MovieInfo/BackLink/BackLink';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Container, List } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies/:movieId');

  useEffect(() => {
    const abortController = new AbortController();
    fetchAPI('cast', abortController.signal, movieId)
      .then(({ data: { cast } }) => setCast(cast))
      .catch(error => console.log(error));

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <Container>
      <BackLink section text={'Close cast'} backRef={backLinkHref.current} />
      {cast.length ? (
        <List>
          {cast.map(actor => {
            return <CastMember key={actor.id} actor={actor} />;
          })}
        </List>
      ) : (
        <ErrorMessage text={'Sorry, we don`t have information about cast'} />
      )}
    </Container>
  );
};

export default Cast;
