import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(1),
  },
}));

export default function RouteMapControlPanel(props) {
  const classes = useStyles();

  return <Box>This is route control panel</Box>;
}
