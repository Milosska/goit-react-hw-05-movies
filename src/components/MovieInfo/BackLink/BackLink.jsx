import { StyledLink, BackIcon, BackHoverText } from './BackLink.styled';

export const BackLink = ({ section, backRef, text }) => {
  const isSectionElem = section ? 'true' : 'false';

  return (
    <StyledLink section={isSectionElem} to={backRef}>
      <BackHoverText section={isSectionElem}>{text}</BackHoverText>
      <BackIcon section={isSectionElem} />
    </StyledLink>
  );
};
