import { css } from 'styled-components';

const colors = css`
  --white: #eef2ff;
  --text: #c7d2fe;
  --gray: #94a3b8;
  --shadow: #0f172a;
  --background: #1e293b;
  --primary: #f486c0;
  --secondary: #818cf8;
  --highlight: #f9a8d4;
  --divide: #475569;
  --gradient: linear-gradient(
    90deg,
    #f693b3 0%,
    #bfa9e8 33%,
    #98b5f5 66%,
    #78c3f6 100%
  );
  --gradient-light: linear-gradient(
    135deg,
    #fdbfcd 0%,
    #eac6ea 25%,
    #ccd1f9 50%,
    #b4dbf7 75%,
    #bfd9ff 100%
  );
`;

const fonts = css`
  --font-heading: 'Poppins', 'San Francisco', 'SF Pro Text', -apple-system,
    system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'SF Mono', 'Fira Mono', monospace;
  --font-sans: 'Work Sans', 'San Francisco', system-ui, sans-serif;
  --fz-xxs: 0.5rem;
  --fz-xs: 0.75rem;
  --fz-sm: 0.875rem;
  --fz-md: 1rem;
  --fz-lg: 1.25rem;
  --fz-xl: 1.5rem;
  --fz-xxl: 4rem;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
`;

const spacing = css`
  --border-size: 1px;
  --pad: 16px;
`;

const variables = css`
  :root {
    ${fonts}
    ${colors}
    ${spacing}
  }
`;
export default variables;
