import { useLocation } from 'react-router-dom';
import { useMedia } from 'react-use';
import PropTypes from 'prop-types';
import { CompaniesList } from './CompaniesList/CompaniesList';
import { StatesInfo } from './StatesInfo/StatesInfo';
import { BackLink } from './BackLink/BackLink';
import {
  BgContainer,
  TextContainer,
  Title,
  Genres,
  Description,
  LinkThumb,
  AddLink,
  ArrowIcon,
} from './MovieInfo.styled';

export const MovieInfo = ({
  backRef,
  movie: {
    backdrop_path,
    title,
    release_date,
    genres,
    overview,
    popularity,
    vote_average,
    status,
    production_companies,
  },
}) => {
  const location = useLocation();
  const isWide = useMedia('(min-width: 1200px)');

  console.log(isWide);

  const parseGenres = genres => {
    if (!genres) {
      return 'N/A';
    }

    let genresArray = [];
    genres.forEach(genre => genresArray.push(genre.name));

    return genresArray.join(', ');
  };

  return (
    <BgContainer bdimage={backdrop_path}>
      <TextContainer>
        <BackLink backRef={backRef} text={'Go back'} />
        <Title>{title}</Title>
        <Genres>
          {release_date && <span>{`(${release_date.split('-')[0]}) `}</span>}
          {parseGenres(genres)}
        </Genres>
        <Description>{overview}</Description>
        <StatesInfo
          popularity={popularity}
          vote_average={vote_average}
          status={status}
        />
        {isWide && <CompaniesList companies={production_companies} />}
        <LinkThumb>
          <AddLink to={'cast'} state={{ from: location }}>
            <ArrowIcon />
            Cast
          </AddLink>
          <AddLink to={'reviews'} state={{ from: location }}>
            <ArrowIcon />
            Reviews
          </AddLink>
          <AddLink to={'trailers'} state={{ from: location }}>
            <ArrowIcon />
            Trailers
          </AddLink>
        </LinkThumb>
      </TextContainer>
    </BgContainer>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    overview: PropTypes.string,
  }).isRequired,
};
