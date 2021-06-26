import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Header } from '@components';

const StyledAbout = styled.div``;

const About = () => {
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
      <Header text="about me" />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </StyledAbout>
  );
};

export default About as React.FunctionComponent;
