import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const StyledAbout = styled.div``;

const About = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
        html
      }
    }
  `);
  const { html } = data.about;

  return (
    <StyledAbout>
      <h2>about me</h2>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </StyledAbout>
  );
};

export default About as React.FunctionComponent;
