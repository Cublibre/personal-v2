import { createGlobalStyle } from 'styled-components';
import { default as device } from './mediaQueries';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables}

  /* scrollbar */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--shadow) var(--background);
  }
  body::-webkit-scrollbar {
    width: 8px;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background: var(--shadow);
    border-radius: 4px;
    border: 2px solid var(--background);
  }
  /* end of scrollbar */

  html {
    @media screen and (min-width:${device.tv}) {
      font-size: 18px;
    }
  }

  p {
    line-height: 1.5;
    margin: 0;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  h1 {
    font-size: 4rem;
    @media screen and (min-width: ${device.tablet}) {
      font-size: 4rem;
    }
    @media screen and (min-width: ${device.desktop}) {
      font-size: 6rem;
    }
    @media screen and (min-width: ${device.tv}) {
      font-size: 7rem;
    }
    font-family: var(--font-heading);
    color: var(--white);
  }

  h2 {
    font-family: var(--font-mono);
    font-size: var(--fz-lg);
    font-weight: var(--fw-medium);
    color: var(--primary);
  }

  h3 {
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    font-weight: var(--fw-medium);
    color: var(--white);
  }

  h4 {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: var(--fz-regular);
    color: var(--white);
  }

  body {
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    font-weight: var(--fw-regular);
    background: var(--background);
    color: var(--text);
  }

  code {
    font-family: var(--font-mono);
  }

  hr {
    border: 0;
    height: 1px;
    background: var(--divide);
  }

  button {
    display: inline-block;
    border: var(--border-size) solid var(--background);
    background: var(--primary);
    padding: 4px 12px;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: var(--fw-medium);
    line-height: 1.25;
    color: var(--background);

    text-decoration: none;
    &:hover, &:focus, &:active {
      background-color: var(--shadow);
      color: var(--primary);
    }
    &:hover {
    }
    &:focus {
      outline: 0;
      color: var(--white);
      border: var(--border-size) dashed var(--highlight);
      text-decoration: none;
    }
    &:active {
      outline: 0;
      border: var(--border-size) solid var(--background);
      text-decoration: underline;
      text-decoration-color: var(--highlight);
      text-underline-offset: 2px;
    }
    &:hover,
    &:active {
      cursor: pointer;
    }
    &:disabled {
      outline: 0;
      border: 0;
      background: var(--shadow);
      color: var(--gray);
      cursor: not-allowed;
    }
  }

  a {
    text-decoration: none;
    font-size: var(--fz-md);
    outline: 0;
    border: var(--border-size) solid var(--background);
    &:link, &:visited {
      color: var(--secondary);
    }

    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--gray);
      text-underline-offset: 2px;
    }

    &:active {
      background: none;
      color: var(--white);
      text-decoration: none;
    }

    &:focus {
      border: var(--border-size) dashed var(--highlight);
    }
  }

  ul, ol {
    line-height: 1.5;
    margin: 0;
    padding-left: 1rem;
  }

  ::selection {
    background: var(--highlight);
    color: var(--background);
  }

  mark {
    background: none;
    color: var(--highlight);
  }
`;

export default GlobalStyle;
