import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
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

export const ObserverDiv = styled.div`
  position: absolute;
  bottom: 80px;
  width: 95%;
  height: 350px;

  @media (min-width: 768px) {
    bottom: 60px;
  }
`;
