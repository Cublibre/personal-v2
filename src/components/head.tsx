import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = () => {
  const { site } = useStaticQuery(query);

  const { title, description, url, image } = site.siteMetadata;

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`}>
      <html lang="en" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Poppins:wght@700&family=Work+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
  }
`;

export default Head as React.FunctionComponent;
