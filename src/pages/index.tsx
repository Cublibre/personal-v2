import React from 'react';
import styled from 'styled-components';
import { Layout, Hero, Experience, Projects, Footer } from '@components';

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

// markup
const IndexPage = () => {
  return (
    <Layout>
      <StyledIndex>
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </StyledIndex>
    </Layout>
  );
};

export default IndexPage as React.FunctionComponent;
