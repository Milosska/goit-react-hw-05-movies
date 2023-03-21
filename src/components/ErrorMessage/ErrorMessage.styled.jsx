import { TbMovieOff } from 'react-icons/tb';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: ${props => (props.small === 'true' ? '10px' : '20px')};
  text-align: center;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-top: ${props => (props.small === 'true' ? '10px' : '50px')};
  }
`;

export const MovieIcon = styled(TbMovieOff)`
  display: ${props => (props.small === 'true' ? 'none' : 'inline-block')};
  width: 50px;
  height: 50px;

  @media (min-width: 1200px) {
    width: 70px;
    height: 70px;
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: ${props => (props.small === 'true' ? '16px' : '22px')};

  @media (min-width: 1200px) {
    margin-top: 0;
    font-weight: 600;
    font-size: ${props => (props.small === 'true' ? '16px' : '32px')};
  }
`;
