import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 50%;
  height: 100%;
  overflow: hidden;

  padding: 15px;

  > img {
    width: 50px;
  }

  > h1 {
    color: white;
    font-size: 50px;
    margin-top: 40px;
  }

  > p {
    color: ${colors.gray};
    font-weight: 600;
    font-size: 12px;

    margin-bottom: 50px;
  }
`;
