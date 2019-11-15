const path = require("path");

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md");
    
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug
//     });
//   };
// };

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 1. Get path to template
  const postTemplate = path.resolve("./src/templates/Post.js");
  
  // 2. Get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);
  
  // 3. Create new pages
  res.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      component: postTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug
      }
    });
  });

};