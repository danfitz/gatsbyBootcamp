import React from "react";
import classes from "./Footer.module.scss";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return <footer className={classes.Footer}>Copyright | {data.site.siteMetadata.author}</footer>;
};

export default Footer;