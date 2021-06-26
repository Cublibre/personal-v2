import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { Header } from '@components';

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--pad);
  padding: 0;
`;

const StyledInnerProject = styled.li`
  margin: var(--pad) 0;
`;

const StyledProjectLink = styled.a`
  &:hover {
    color: var(--highlight);
    text-decoration: none;
  }
`;

const StyledToolsList = styled.ul`
  color: var(--highlight);
  padding: 0;
  li {
    display: inline;
    white-space: nowrap;
  }
  li:not(:last-child) {
    &:after {
      color: var(--divide);
      content: '·';
      margin: 0 8px;
    }
  }
`;

interface IProjectNode {
  html: string;
  frontmatter: {
    name: string;
    tools: Array<string>;
    url: string;
    featuredImage: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}
interface IProjectEdge {
  node: IProjectNode;
}

const Projects = () => {
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
              url
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.projects.edges.map(({ node }: IProjectEdge) => node);

  const ProjectInner = (node: IProjectNode) => {
    const { frontmatter, html } = node;
    const { name, tools, url, featuredImage } = frontmatter;
    const featuredImageFluid = featuredImage.childImageSharp.fluid;
    return (
      <StyledInnerProject key={`project-inner-${name}`}>
        <Img
          style={{ maxWidth: '150px', marginBottom: 'var(--pad)' }}
          fluid={featuredImageFluid}
        />
        <h3>
          {name}{' '}
          {url && (
            <StyledProjectLink href={url} rel="nofollow noopener noreferrer">
              ↗
            </StyledProjectLink>
          )}
        </h3>

        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <StyledToolsList>
          {tools.map((t: string, i: number) => (
            <li key={`${name}-tools-${i}`}>{t}</li>
          ))}
        </StyledToolsList>
      </StyledInnerProject>
    );
  };

  return (
    <>
      <Header text="stuff I've worked on" />
      <StyledProjectList>
        {projects.map((p: IProjectNode) => {
          return ProjectInner(p);
        })}
      </StyledProjectList>
    </>
  );
};

export default Projects as React.FunctionComponent;
