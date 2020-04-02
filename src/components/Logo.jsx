import React from "react";
import { Typography } from "@material-ui/core";
import BlurOnIcon from "@material-ui/icons/BlurOn";

const Logo = () => {
  return (
    <React.Fragment>
      <Typography variant="h2" style={{ paddingBottom: 10 }}>
        Geospace
      </Typography>
      <BlurOnIcon />
    </React.Fragment>
  );
};

export default Logo;
