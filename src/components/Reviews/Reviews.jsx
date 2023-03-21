import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchAPI } from '../../helpers/fetchAPI';
import { ReviewCard } from './ReviewCard/ReviewCard';
import { ButtonUp } from '../ButtonUp/ButtonUp';
import { BackLink } from '../MovieInfo/BackLink/BackLink';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Container, List, ObserverDiv } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies/:movieId');

  useEffect(() => {
    const abortController = new AbortController();
    fetchAPI('reviews', abortController.signal, movieId)
      .then(({ data: { results } }) => setReviews(results))
      .catch(error => console.log(error));

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <Container>
      <BackLink section text={'Close reviews'} backRef={backLinkHref.current} />
      {reviews.length ? (
        <>
          <List>
            {reviews.map(review => {
              return <ReviewCard key={review.id} review={review} />;
            })}
          </List>
          <ObserverDiv />
        </>
      ) : (
        <ErrorMessage text={'Sorry, there are no reviews yet'} />
      )}
      <ButtonUp />
    </Container>
  );
};

export default Reviews;
