import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Layout } from '@components';
import { Helmet } from 'react-helmet';

const Styled404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  h1 {
    font-size: var(--fz-xxl);
    padding-bottom: 2rem;
  }
  button {
    font-size: var(--fz-xl);
    font-family: var(--font-heading);
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Styled404>
        <Helmet title="404" />
        <h1>Page not found</h1>
        <Link to="/">
          <button>🠔 Go home</button>
        </Link>
      </Styled404>
    </Layout>
  );
};

export default NotFoundPage;
