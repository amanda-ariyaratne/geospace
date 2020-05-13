import React from "react";

// material-ui
import { Typography } from "@material-ui/core";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    paddingLeft: 80,
  },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <Typography variant="h2" style={{ paddingBottom: 10 }}>
        Ascent
      </Typography>
    </div>
  );
};

export default Logo;
