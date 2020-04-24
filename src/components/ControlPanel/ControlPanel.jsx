import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// components
import MapTheme from "./MapTheme";
import EditLayersButton from "./EditLayersButton";
import AddLayerMenu from "./AddLayerMenu";
import PitchAndBearing from "./PitchAndBearing";
import ViewDataButton from "./ViewDataButton";

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
      <PitchAndBearing boxStyle={classes.boxStyle} />
      <AddLayerMenu boxStyle={classes.boxStyle} />
      <EditLayersButton boxStyle={classes.boxStyle} />
      <ViewDataButton boxStyle={classes.boxStyle} />
    </Box>
  );
}
