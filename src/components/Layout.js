import React from "react";
import "../styles/setup.module.scss";
import layoutClasses from "./Layout.module.scss";
import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";

const Layout = props => {
  return (
    <div className={layoutClasses.Layout}>
      <Head title={props.title} />
      <div>
        <Header />
        <main>
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  ); 
};

export default Layout;