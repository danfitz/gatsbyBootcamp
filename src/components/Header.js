import React from "react";
import { Link } from "gatsby";
import classes from "./Header.module.scss";

const Header = props => {
  return (
    <header className={classes.Header}>
      <div>
        <Link to="/" className={classes.SiteTitle}>
          Dan Fitz
        </Link>
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