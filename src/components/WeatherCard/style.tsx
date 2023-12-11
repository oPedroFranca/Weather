import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  height: 140px;
  margin-bottom: 40px;

  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 8px;
    padding: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.purple};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.white_black};
  }
`;

export const CardDay = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: column;

  min-width: 90px;
  height: 120px;

  background: rgba(255, 255, 255, 0.207);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.271);
  box-shadow: 0px 5px 5px rgba(2, 2, 2, 0.283);

  border-radius: 8px;

  margin-right: 5px;
  margin-left: 5px;

  > img {
    width: 50px;
    height: 50px;
    object-fit: contain;
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
