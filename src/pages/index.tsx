import React from "react";
import styled from "styled-components";
import { Layout, Hero } from "@components";

// markup
const IndexPage = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Hero />
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          body followed by <code>Code line</code>
        </p>
        <button>Button</button>
      </Layout>
    </>
  );
};

export default IndexPage;
