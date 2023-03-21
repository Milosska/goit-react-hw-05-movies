import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 20px;
  font-size: 22px;

  @media (min-width: 1200px) {
    text-align: center;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 0;
  text-align: start;
`;
