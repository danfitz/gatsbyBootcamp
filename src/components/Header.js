import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import classes from "./Header.module.scss";

const Header = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `);
  
  return (
    <header className={classes.Header}>
      <div>
        <Link to="/" className={classes.SiteTitle}>
          {data.site.siteMetadata.title}
        </Link>
        <p>Created by {data.site.siteMetadata.author}</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/" className={classes.Link} activeClassName={classes.ActiveLink}>Home</Link></li>
          <li><Link to="/about" className={classes.Link} activeClassName={classes.ActiveLink}>About</Link></li>
          <li><Link to="/blog" className={classes.Link} activeClassName={classes.ActiveLink}>Blog</Link></li>
          <li><Link to="/contact" className={classes.Link} activeClassName={classes.ActiveLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;