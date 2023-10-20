import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  color: ${colors.white};

  background-image: url(public/img/mesh-gradient.png);
  background-size: 100% 100%;
  background-position: center;
`;

export const header = styled.div`
  display: flex;
  align-items: center;
`;
