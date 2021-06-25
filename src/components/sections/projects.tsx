import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

interface IProjectNode {
  html: string;
  frontmatter: {
    name: string;
    tools: Array<string>;
  };
}
interface IProjectEdge {
  node: IProjectNode;
}

const Projects = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              name
              tools
            }
          }
        }
      }
    }
  `);
  const projects = data.projects.edges.map(({ node }: IProjectEdge) => node);

  const ProjectInner = (node: IProjectNode): JSX.Element => {
    const { frontmatter, html } = node;
    const { name, tools } = frontmatter;
    return (
      <div>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        {tools.map((t: string, i: number) => (
          <span key={`${name}-tools-${i}`}>{t}</span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>stuff I&apos;ve worked on</h2>
      <hr />
      {projects.map((p: IProjectNode) => {
        return ProjectInner(p);
      })}
    </div>
  );
};

export default Projects as React.FunctionComponent;
