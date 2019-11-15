import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const Head = props => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Helmet
      title={`${props.title} | ${site.siteMetadata.title}`}
    />
  );
};

export default Head;