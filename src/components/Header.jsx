import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Logo from "./Logo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
