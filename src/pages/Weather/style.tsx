import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  color: ${colors.white};

  background-image: url(public/img/mesh-gradient.png);
  background-size: 100% 100%;
  background-position: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 20px;

  > input {
    background: rgba(255, 255, 255, 0.207);
    border-radius: 16px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.271);
    box-shadow: 0px 5px 5px rgba(2, 2, 2, 0.283);

    color: white;
    font-size: 14px;
    font-weight: 600;

    border-radius: 15px 0 0 15px;
    border-right: none;

    outline: none;

    padding-left: 10px;
    padding-right: 10px;

    width: 370px;
    height: 30px;

    transition: all 0.3s ease;

    &::placeholder {
      color: white;
    }
  }

  input[type='search']::-webkit-search-cancel-button {
    display: none;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 50%;
  min-width: 700px;
  padding-left: 10px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    width: 100%;
    height: 100%;
    font-size: 20px;

    margin-top: 20px;

    > span {
      display: flex;
      align-items: center;
    }

    > p {
      font-size: 30px;
      margin-top: 40px;
      font-weight: 600;
    }

    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        width: 270px;
      }
    }

    &:nth-child(3) {
    }
  }
`;

export const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: row;

  font-size: 35px;
  font-weight: 600;

  margin-bottom: 20px;

  > img {
    margin-right: 12px;
    width: 30px;
  }
`;

export const InfoWeather = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;

  > span {
    margin-bottom: 10px;
  }
`;

export const WeekDay = styled.p`
  font-size: 18px;
`;

export const LocationIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-right: 8px;
`;
