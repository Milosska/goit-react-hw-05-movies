import PropTypes from 'prop-types';
import {
  Card,
  BorderContainer,
  UserContainer,
  PhotoContainer,
  PhotoImg,
  PhotoIcon,
  RatingElem,
  RatingItem,
  DateElem,
  ContentThumb,
} from './ReviewCard.styled';

export const ReviewCard = ({
  review: {
    author,
    content,
    created_at,
    author_details: { avatar_path, rating },
  },
}) => {
  const getUserPhoto = (avatar_path, author) => {
    if (!avatar_path) {
      return <PhotoIcon />;
    }

    return (
      <PhotoImg
        src={
          avatar_path.includes('https://')
            ? `${avatar_path.slice(1, avatar_path.length)}`
            : `https://image.tmdb.org/t/p/original/${avatar_path}`
        }
        alt={author}
      />
    );
  };

  const getDate = created_at => {
    const date = new Date(created_at);
    return date.toLocaleString();
  };

  return (
    <Card>
      <BorderContainer>
        <UserContainer>
          <PhotoContainer>{getUserPhoto(avatar_path, author)}</PhotoContainer>
          <div>
            <p>{author}</p>
            <RatingElem>
              <RatingItem />
              {rating}
            </RatingElem>
          </div>
        </UserContainer>
        <ContentThumb>
          <DateElem>{getDate(created_at)}</DateElem>
          <p>{content}</p>
        </ContentThumb>
      </BorderContainer>
    </Card>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    author_details: PropTypes.shape({
      avatar_path: PropTypes.string,
      rating: PropTypes.number,
    }),
  }).isRequired,
};
