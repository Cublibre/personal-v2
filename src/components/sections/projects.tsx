import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

const StyledProjectLink = styled.a`
  &:hover {
    color: var(--highlight);
    text-decoration: none;
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
      <div key={`project-inner-${name}`}>
        <Img
          style={{ maxWidth: '100px', borderRadius: '4px' }}
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
