import React from "react";
import classes from "./contact.css";
import Layout from "../components/Layout"; 

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <form onSubmit={ e => e.preventDefault() }>
        <label for="name">Input name</label>
        <input type="text" id="name" />
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
};

export default ContactPage;