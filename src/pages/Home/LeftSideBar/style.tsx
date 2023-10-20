import styled, { keyframes } from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const blinkAnimation = keyframes`
  0% {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
  100% {
    border-color: transparent;
  }
`;

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.23);
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.271);

  padding: 15px;

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10%;

    > img {
      position: relative;
      bottom: 50px;
      left: -10px;
      width: 150px;
    }

    > p {
      color: ${colors.gray};
      font-weight: bold;
      font-size: 12px;
      margin-top: 25px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  color: white;

  > span {
    background-color: white;
    width: 7px;
    height: 7px;
    border-radius: 50%;

    margin-right: 5px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 89%;

  > span {
    width: 440px;

    > h1 {
      max-width: 390px;
      color: white;
      font-weight: 600;
      font-size: 35px;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;

      border-right: 3px solid white;

      animation:
        ${typingAnimation} 2s steps(23),
        ${blinkAnimation} 600ms infinite;
    }

    > p {
      color: ${colors.gray};
      max-width: 460px;
      font-weight: 600;
      font-size: 12px;
      margin-top: 20px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10%;

  > img {
    position: relative;
    bottom: 50px;
    left: -10px;
    width: 150px;
  }

  > p {
    color: ${colors.gray};
    font-weight: bold;
    font-size: 12px;
    margin-top: 25px;
  }
`;
