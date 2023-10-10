import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white_black};
  width: 50%;
  max-width: 600px;
  height: 100%;
  border-radius: 10px;

  > img {
    width: 200px;
  }
`;
