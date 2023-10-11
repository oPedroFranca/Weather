import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

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
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255, 255, 0.09);

  padding: 15px;

  > header {
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
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 89%;

    > h1 {
      max-width: 460px;
      color: white;
      font-weight: 600;
      font-size: 35px;

      margin-bottom: 20px;
    }

    > p {
      color: ${colors.gray};
      max-width: 460px;

      font-weight: 600;
      font-size: 12px;

      margin-bottom: 20px;
    }
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10%;

    > img {
      position: relative;
      bottom: 40px;
      left: -10px;
      width: 150px;
    }

    > p {
      color: white;
      font-weight: bold;
      font-size: 12px;
    }
  }
`;
