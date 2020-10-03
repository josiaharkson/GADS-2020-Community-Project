import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Styles from "../home.module.css";

const Index = ({}) => {
  return (
    <div className={Styles.header}>
      <Link href="assist_v3_english">
        <Button variant="contained" size="large">
          Take Assist
        </Button>
      </Link>

      <Button variant="contained" size="large">
        Request for accountability partner
      </Button>

      <Button variant="contained" size="large">
        Find a support group nearest to you
      </Button>
    </div>
  );
};

export default Index;
