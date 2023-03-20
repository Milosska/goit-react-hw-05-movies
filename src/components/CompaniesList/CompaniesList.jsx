import { useState, useRef } from 'react';

import {
  Container,
  List,
  TitleText,
  ListElem,
  LogoContainer,
  CompanyLogo,
  LogoPlaceholder,
  CompanyName,
  ArrowBtn,
  ArrowIcon,
} from './CompaniesList.styled';

export const CompaniesList = ({ companies }) => {
  const [prodCompanies] = useState(() => {
    return companies.length > 9 ? companies.slice(0, 8) : companies;
  });
  const [isClose, setIsClose] = useState(true);
  const listRef = useRef();
  const containerRef = useRef();

  const getLogo = (logo, name) =>
    logo ? (
      <CompanyLogo
        src={`https://image.tmdb.org/t/p/original/${logo}`}
        alt={name}
      />
    ) : (
      <LogoPlaceholder />
    );

  const handleClick = e => {
    let arrowIcon = e.currentTarget.children[0];
    // Arrow animation
    arrowIcon.style.transform = isClose ? 'rotate(90deg)' : 'rotate(-90deg)';

    const liElems = listRef.current.children;
    // List width animation
    if (liElems.length > 6) {
      containerRef.current.style.width = isClose ? '1000px' : '500px';
    } else if (liElems.length > 3) {
      containerRef.current.style.width = isClose ? '800px' : '500px';
    }

    // Li animation
    for (var i = 0; i < liElems.length; i += 1) {
      console.log(liElems[i]);

      if (i > 0) {
        if (isClose) {
          liElems[i].style.display = 'flex';
        } else {
          liElems[i].style.display = 'none';
        }
      }
    }
    setIsClose(prev => !prev);
  };

  return (
    <>
      {window.innerWidth > 1199 && (
        <Container ref={containerRef}>
          <TitleText>Companies:</TitleText>
          {prodCompanies.length ? (
            <List ref={listRef}>
              {prodCompanies.map(({ logo_path, name, id }) => {
                return (
                  <ListElem key={id}>
                    <LogoContainer>{getLogo(logo_path)}</LogoContainer>
                    <CompanyName>{name}</CompanyName>
                  </ListElem>
                );
              })}
            </List>
          ) : (
            <TitleText>No info about companies</TitleText>
          )}

          {companies.length > 1 && (
            <ArrowBtn type="button" onClick={handleClick}>
              <ArrowIcon />
            </ArrowBtn>
          )}
        </Container>
      )}
    </>
  );
};
