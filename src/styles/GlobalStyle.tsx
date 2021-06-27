import { createGlobalStyle } from 'styled-components';
import { default as device } from './mediaQueries';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Fonts */
    --font-heading: 'Poppins', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', 'SF Mono', 'Fira Mono', monospace;
    --font-sans: 'Work Sans', 'San Francisco', system-ui, sans-serif;
    --fz-xxs:   0.5rem;
    --fz-xs:    0.75rem;
    --fz-sm:    0.875rem;
    --fz-md:    1rem;
    --fz-lg:    1.25rem;
    --fz-xl:    1.5rem;
    --fz-xxl:   4rem;
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-bold: 700;
    /* end of fonts */

    /* Colors */
    --white: #eef2ff;
    --text: #c7d2fe;
    --gray: #94a3b8;
    --shadow: #0f172a;
    --background: #1e293b;
    --primary: #818cf8;
    --secondary: #F486C0;
    --highlight: #f9a8d4;
    --divide: #475569;
    --gradient: linear-gradient(
        90deg,
        #F693B3 0%,
        #BFA9E8 33%,
        #98B5F5 66%,
        #78C3F6 100%
      );
    --gradient-light: linear-gradient(
        135deg,
        #fdbfcd 0%,
        #eac6ea 25%,
        #ccd1f9 50%,
        #b4dbf7 75%,
        #bfd9ff 100%
      );
    /* end of colors */

    /* Misc */
    --border-size: 1px;
    --pad: 16px;
  }

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

  p {
    line-height: 1.5;
    margin: 0;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  h1 {
    @media screen and (min-width: ${device.desktop}) {
      font-size: 8rem;
    }
    @media screen and (max-width: ${device.desktop}) {
      font-size: clamp(4rem, 10vw, 6rem);
    }
    @media screen and (max-width: ${device.tablet}) {
      font-size: 4rem;
    }
    @media screen and (max-width: ${device.mobile}) {
      font-size: 3.5rem;
    }
    font-family: var(--font-heading);
    color: var(--white);
  }

  h2 {
    font-family: var(--font-mono);
    font-size: var(--fz-lg);
    font-weight: var(--fw-medium);
    color: var(--secondary);
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
      color: var(--primary);
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
