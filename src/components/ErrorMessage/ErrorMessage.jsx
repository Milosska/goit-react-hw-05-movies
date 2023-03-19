import { Container, MovieIcon, Text } from './ErrorMessage.styled';

export const ErrorMessage = () => {
  return (
    <Container>
      <MovieIcon />
      <Text>Oops, something went wrong. Please try another request</Text>
    </Container>
  );
};
