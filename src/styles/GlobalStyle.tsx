import { createGlobalStyle } from 'styled-components';

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
    --fz-title: 6rem;
    /* end of fonts */

    /* Colors */
    --white: #eef2ff;
    --text: #c7d2fe;
    --background: #0f172a;
    --primary: #818cf8;
    --gradient: linear-gradient(
        90deg,
        #F693B3 0%,
        #BFA9E8 33%,
        #98B5F5 66%,
        #78C3F6 100%
      );
    --gradient-light: linear-gradient(
        90deg,
        #fdbfcd 0%,
        #eac6ea 25%,
        #ccd1f9 50%,
        #b4dbf7 75%,
        #bfd9ff 100%
      );
    /* end of colors */
  }

  h1, h2 {
    font-family: var(--font-heading);
    color: var(--white);
  }

  h1 {
    font-size: var(--fz-title);
  }

  h2 {
    font-size: var(--fz-xxl);
    text-shadow: 4px 4px var(--primary);
  }

  body {
    font-family: var(--font-sans);
    background: var(--background);
    color: var(--text);
  }

  code {
    font-family: var(--font-mono)
  }
`;

export default GlobalStyle;
