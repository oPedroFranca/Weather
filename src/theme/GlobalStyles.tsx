import { createGlobalStyle } from 'styled-components';

export const colors = {
  dark_black: '#0B131E',
  white_black: '#202B3B',
  purple: '#907ad6',
  dark_purple: '#775cd1',
  white: '#FFFFFF',
  gray: '#ffffff63',
};

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: 'Gabarito', sans-serif;
      font-family: 'Inter', sans-serif;
    }

    #root{
      background-color: ${colors.dark_black};
      width: 100vw;
      height: 100vh;

      background-image: url('public/img/background.png');
    }


    a:hover {
      text-decoration: underline;
    }

    a:visited {
      color: ${colors.purple};
    }

    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    h2 {
      font-size: 20px;
      font-weight: bold;
    }

    h3 {
      font-size: 18px;
      font-weight: bold;
    }

    body {

    }
`;
