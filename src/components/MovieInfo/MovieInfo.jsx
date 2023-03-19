import { Link } from 'react-router-dom';
// import { CompaniesInfo } from '../CompaniesInfo/CompaniesInfo';
import {
  BgContainer,
  TextContainer,
  BackLink,
  BackIcon,
  BackHoverText,
  Title,
  Genres,
  Description,
} from './MovieInfo.styled';

export const MovieInfo = ({
  backRef,
  movie: {
    backdrop_path,
    title,
    release_date,
    genres,
    overview,
    production_companies,
  },
}) => {
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
        <BackLink to={backRef}>
          <BackHoverText>Go back</BackHoverText>
          <BackIcon />
        </BackLink>
        <Title>{title}</Title>
        <Genres>
          {release_date && <span>{`(${release_date.split('-')[0]}) `}</span>}
          {parseGenres(genres)}
        </Genres>
        <Description>{overview}</Description>
        {/* Set styles from here! */}
        {/* <CompaniesInfo companies={production_companies} /> */}
      </TextContainer>
      <div>
        <p>icon /Popularity</p>
        <p>icon /Vote average</p>
        <p>icon /Status</p>
      </div>
      <Link to={'cast'}>Cast</Link>
      <Link to={'reviews'}>Reviews</Link>
    </BgContainer>
  );
};
