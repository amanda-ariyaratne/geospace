import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(1),
  },
}));

export default function HeatMapControlPanel(props) {
  const classes = useStyles();

  return <Box>This is heat control panel</Box>;
}
