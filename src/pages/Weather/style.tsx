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

    width: 400px;
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
