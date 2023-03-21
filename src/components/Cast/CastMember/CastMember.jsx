import { Card, TextContainer, StarName, Character } from './CastMember.styled';

export const CastMember = ({ actor: { profile_path, name, character } }) => {
  return (
    <Card bdimage={profile_path}>
      <TextContainer>
        <StarName>{name}</StarName>
        <Character>as {character}</Character>
      </TextContainer>
      {/* Добавить запрос на биографию по клику на кнопку */}
    </Card>
  );
};
