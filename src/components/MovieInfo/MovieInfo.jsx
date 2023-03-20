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
  StatisticContainer,
  StatText,
  PopularityIcon,
  StarIcon,
  CameraIcon,
  StatData,
  StatContainer,
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
        <StatisticContainer>
          <StatContainer>
            <PopularityIcon />
            <StatText>
              Popularity: <StatData>{popularity}</StatData>
            </StatText>
          </StatContainer>
          <StatContainer>
            <StarIcon />
            <StatText>
              Vote average:<StatData>{vote_average}</StatData>
            </StatText>
          </StatContainer>
          <StatContainer>
            <CameraIcon />
            <StatText>
              Status: <StatData>{status}</StatData>
            </StatText>
          </StatContainer>
        </StatisticContainer>
        {/* Set styles from here! */}
        {/* <CompaniesInfo companies={production_companies} /> */}
      </TextContainer>

      <Link to={'cast'}>Cast</Link>
      <Link to={'reviews'}>Reviews</Link>
    </BgContainer>
  );
};
