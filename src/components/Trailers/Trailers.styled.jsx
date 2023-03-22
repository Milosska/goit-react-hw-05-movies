import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  font-size: 22px;

  @media (min-width: 1200px) {
    text-align: center;
  }
`;

export const GalleryThumb = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin-top: 20px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BtnThumb = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

export const VideoBtnThumb = styled.li`
  width: 100px;
  height: auto;
  outline: 2px solid red;
`;

export const SmallIframes = styled.iframe`
  width: 100%;
  height: 100%;

  &.active {
    width: 80vw;
  }
`;
