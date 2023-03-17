import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0;
  list-style: none;

  @media (min-width: 1200px) {
    gap: 50px;
  }
`;
