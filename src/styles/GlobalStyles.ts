import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  body {
    font-family: 'Circular', Arial, Helvetica, sans-serif;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: #1db954; /* Spotify 메인 색상 */
  }

  button {
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }

    ::-webkit-scrollbar {
      width: 6px;
    }
  }
`;

export default GlobalStyles;