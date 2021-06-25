import React from 'react';
import styled from 'styled-components';
import { Layout, Hero, About, Experience, Projects, Footer } from '@components';

// markup
const IndexPage = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;
