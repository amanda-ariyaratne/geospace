import React from "react";

// material-ui
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// react router
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    paddingLeft: 80,
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Link to="/" className={classes.link}>
        <Typography style={{ fontSize: 72, fontWeight: "bold" }}>
          Ascent
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
