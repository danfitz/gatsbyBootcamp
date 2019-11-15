import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import classes from "./blog.module.scss";
import Layout from "../components/Layout"; 

const BlogPage = () => {
  const mdData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const postsJSX = mdData.allMarkdownRemark.edges.map(post => {
    return (
      <li key={post.node.id}>
        <Link to={`/blog/${post.node.fields.slug}`}>
          <h2>
              {post.node.frontmatter.title}
          </h2>
          <p>{post.node.frontmatter.date}</p>
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={classes.BlogList}>
        {postsJSX}
      </ol>
    </Layout>
  );
};

export default BlogPage;