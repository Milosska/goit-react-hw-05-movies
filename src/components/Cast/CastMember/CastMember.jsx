import { useState } from 'react';
import { fetchAPI } from '../../../helpers/fetchAPI';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';
import {
  Card,
  TextContainer,
  StarName,
  Character,
  BioBtn,
  ArrowIcon,
  Biography,
} from './CastMember.styled';

export const CastMember = ({
  actor: { id, profile_path, name, character },
}) => {
  const [biography, setBiography] = useState(null);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    fetchAPI('person', null, id)
      .then(({ data: { biography } }) => setBiography(biography))
      .catch(error => console.log(error));

    setIsShown(true);
  };

  return (
    <Card bdimage={profile_path}>
      <TextContainer>
        <StarName>{name}</StarName>
        <Character>as {character}</Character>
        {/* Добавить запрос на биографию по клику на кнопку */}
        {!isShown && (
          <BioBtn type="button" onClick={handleClick}>
            <ArrowIcon />
            View biography
          </BioBtn>
        )}

        {isShown && biography && <Biography>{biography}</Biography>}
        {isShown && !biography && (
          <ErrorMessage small text={'Biography is unknown'} />
        )}
      </TextContainer>
    </Card>
  );
};
