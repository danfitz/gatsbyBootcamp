import React from "react";
import { Link } from "gatsby";
import classes from "./index.css";
import Aux from "../hoc/Auxiliary";
import Footer from "../components/Footer";
import Header from "../components/Header";

const IndexPage = () => {
  return (
    <Aux>
      <Header />
      <h1>Dan Fitz</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur eius eos cum suscipit culpa voluptas neque delectus asperiores quas?</p>
      <p>Need a developer? <Link to="/contact">Contact Me</Link>.</p>
      <Footer />
    </Aux>
  );
};

export default IndexPage;