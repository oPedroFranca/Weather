import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  margin-bottom: 40px;
`;

export const CardDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: column;

  width: 90px;
  height: 120px;

  background: rgba(255, 255, 255, 0.207);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.271);
  box-shadow: 0px 5px 5px rgba(2, 2, 2, 0.283);

  border-radius: 8px;

  margin-left: 25px;

  > img {
    width: 50px;
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-weight: bold;
    font-size: 12px;
    margin-top: 5px;

    &:nth-child(2) {
      font-size: 16px;
    }
  }
`;

export const WeekDay = styled.span`
  font-size: 10px;
`;
