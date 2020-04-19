import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// components
import MapTheme from "./MapTheme";
import AddLayerButton from "./AddLayerButton";
import AddLayerMenu from "./AddLayerMenu";
import PitchAndBearing from "./PitchAndBearing";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(1),
  },
}));

export default function ControlPanel() {
  const classes = useStyles();

  return (
    <Box>
      <MapTheme boxStyle={classes.boxStyle} />
      <AddLayerMenu boxStyle={classes.boxStyle} />
      <PitchAndBearing boxStyle={classes.boxStyle} />
    </Box>
  );
}
