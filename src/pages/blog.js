import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import classes from "./blog.module.scss";
import Layout from "../components/Layout"; 

const BlogPage = () => {
  const mdData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        nodes {
          title
          slug
          publishedDate (formatString:"MMMM Do, YYYY")
          id
        }
      }
    }
  `);

  const postsJSX = mdData.allContentfulBlogPost.nodes.map(post => {
    return (
      <li key={post.id}>
        <Link to={`/blog/${post.slug}`}>
          <h2>
              {post.title}
          </h2>
          <p>{post.publishedDate}</p>
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