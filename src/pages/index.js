import React from "react";
import { Link } from "gatsby";
import classes from "./index.css";
import Layout from "../components/Layout"; 

const IndexPage = () => {
  return (
    <Layout title="Home">
      <h1>Dan Fitz</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur eius eos cum suscipit culpa voluptas neque delectus asperiores quas?</p>
      <p>Need a developer? <Link to="/contact">Contact Me</Link>.</p>
    </Layout>
  );
};

export default IndexPage;