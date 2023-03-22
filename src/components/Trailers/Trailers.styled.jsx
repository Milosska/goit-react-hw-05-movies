import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 20px 0 40px;
  font-size: 22px;

  @media (min-width: 1200px) {
    text-align: center;
  }
`;

export const PlayerThumb = styled.div`
  position: relative;
  margin: 20px auto 0;
  width: 100vw;
  height: 300px;

  @media (min-width: 480px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1200px) {
    width: 80vw;
    height: 600px;
  }
`;

export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
