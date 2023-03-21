import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../../helpers/fetchAPI';
import { CastMember } from './CastMember/CastMember';
import { ButtonUp } from '../ButtonUp/ButtonUp';
import { List } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    fetchAPI('cast', abortController.signal, movieId)
      .then(({ data: { cast } }) => setCast(cast))
      .catch(error => console.log(error));

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  console.log(cast);

  return (
    // Добавить проверку по длине массива + error message
    <>
      {/* <button type="button">Close</button> */}
      <List>
        {cast.map(actor => {
          return <CastMember key={actor.id} actor={actor} />;
        })}
      </List>
      <ButtonUp />
    </>
  );
};

export default Cast;
