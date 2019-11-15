import React from "react";
import classes from "./contact.css";
import Aux from "../hoc/Auxiliary";

const ContactPage = () => {
  return (
    <Aux>
      <h1>Contact Me</h1>
      <form onSubmit={ e => e.preventDefault() }>
        <label for="name">Input name</label>
        <input type="text" id="name" />
        <input type="submit" value="Submit" />
      </form>
    </Aux>
  );
};

export default ContactPage;