import PropTypes from 'prop-types';
import { Container, MovieIcon, Text } from './ErrorMessage.styled';

export const ErrorMessage = ({ text, small }) => {
  const isSmall = small ? 'true' : 'false';

  return (
    <Container small={isSmall}>
      <MovieIcon small={isSmall} />
      <Text small={isSmall}>{text}</Text>
    </Container>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  small: PropTypes.bool,
};
