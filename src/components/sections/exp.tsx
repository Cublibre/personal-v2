import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
interface IExpNode {
  html: string;
  frontmatter: {
    title: string;
    date: string;
    range: string;
    place: string;
  };
}
interface IExpEdge {
  node: IExpNode;
}

const Experience = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      exps: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/exp/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              range
              place
            }
          }
        }
      }
    }
  `);
  const exps = data.exps.edges.map(({ node }: IExpEdge) => node);

  const ExpInner = (node: IExpNode): JSX.Element => {
    const { frontmatter, html } = node;
    const { title, range, place } = frontmatter;
    return (
      <div key={`exp-inner-${title}`}>
        <h4>{place}</h4>
        <h3>{title}</h3>
        <p>{range}</p>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    );
  };

  return (
    <div>
      <h2>work &amp; school</h2>
      <hr />
      {exps.map((e: IExpNode) => {
        return ExpInner(e);
      })}
    </div>
  );
};

export default Experience as React.FunctionComponent;
