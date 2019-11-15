import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title="404">
      <h1>Page Not Found</h1>
      <p><Link to="/">Go Home</Link></p>
    </Layout>
  );
};

export default NotFoundPage;