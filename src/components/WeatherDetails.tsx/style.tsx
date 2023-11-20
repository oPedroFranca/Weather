import styled from 'styled-components';

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
        width: 200px;
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
    width: 28px;
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
