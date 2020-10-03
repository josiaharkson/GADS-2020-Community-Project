import React from "react";
import Styles from "./home.module.css";

import Header from "./components/Home.header";

const Index = () => {
  return (
    <>
      <div className={Styles.root}>
        <Header />
      </div>
    </>
  );
};

export default Index;
