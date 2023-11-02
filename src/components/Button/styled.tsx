import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const Container = styled.div``;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.dark_purple};
  color: white;
  font-weight: 600;
  font-size: 13px;

  width: 120px;
  height: 40px;

  border-radius: 50px;
  cursor: pointer;
  user-select: none;

  --glow-color: ${colors.dark_purple};
  --glow-spread-color: rgba(87, 15, 154, 0.781);

  box-shadow:
    0 0 0.5em 0.1em var(--glow-color),
    0 0 3em 0.3em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);

  transition: all 0.3s ease;

  &:hover {
    --glow-spread-color: rgba(87, 15, 154, 0.9);
    --glow-color: #674fb7;
    background-color: #674fb7;
    transform: scale(1.02);
  }

  &.buttonSearch {
    background: rgba(255, 255, 255, 0.237);
    border-radius: 16px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.271);
    box-shadow: 5px 5px 5px rgba(2, 2, 2, 0.283);
    width: 25px;
    font-size: 18px;
    height: 30px;
    border-radius: 0px 15px 15px 0px;
    border-left: none;

    &:hover {
      transform: scale(1);
    }
  }
`;
