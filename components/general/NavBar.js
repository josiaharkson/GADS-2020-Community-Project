import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Styles from "./navbar.module.css";

const NavBar = ({ bg, spacer }) => {
  return (
    <>
      <div className={clsx(Styles[`nav_${bg}`], Styles.nav)}>
        <Typography variant="h6">App Logo</Typography>
      </div>
      {spacer && <div className={Styles.spacer} />}
    </>
  );
};

NavBar.propTypes = {
  bg: PropTypes.string.isRequired,
  spacer: PropTypes.bool,
};

export default NavBar;
