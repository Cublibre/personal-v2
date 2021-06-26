import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Header } from '@components';

const StyledExpList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const StyledInnerExp = styled.li`
  display: flex;
`;

const InnerExpLeft = styled.h4`
  text-align: right;
  padding: var(--pad) var(--pad) 0 0;
  min-width: 4rem;
  height: 100%;
`;

const InnerExpRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--pad);

  ul {
    margin-top: 4px;
    list-style: none;
  }
  li:before {
    content: '» ';
    color: var(--primary);
  }
`;

const VerticalLine = styled.div`
  border-left: 1px solid var(--divide);
  margin-top: var(--pad);
`;

const StyledExpTitle = styled.h3`
  line-height: 1;
  padding-bottom: calc(var(--pad) * 0.5);
`;

const StyledDate = styled.span`
  font-family: var(--font-mono);
  font-weight: var(--fw-medium);
  font-size: var(--fz-sm);
  color: var(--highlight);
`;

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

const Experience = () => {
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

  const ExpInner = (node: IExpNode) => {
    const { frontmatter, html } = node;
    const { title, range, place } = frontmatter;
    return (
      <StyledInnerExp key={`exp-inner-${title}`}>
        <InnerExpLeft>{place}</InnerExpLeft>
        <VerticalLine />
        <InnerExpRight>
          <StyledExpTitle>{title}</StyledExpTitle>
          <StyledDate>{range}</StyledDate>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </InnerExpRight>
      </StyledInnerExp>
    );
  };

  return (
    <div>
      <Header text="work &amp; school" />
      <StyledExpList>
        {exps.map((e: IExpNode) => {
          return ExpInner(e);
        })}
      </StyledExpList>
    </div>
  );
};

export default Experience as React.FunctionComponent;
