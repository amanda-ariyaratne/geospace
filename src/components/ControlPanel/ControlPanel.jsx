import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// components
import MapTheme from "./MapTheme";
import EditLayersButton from "./EditLayersButton";
import AddLayerMenu from "./AddLayerMenu";
import PitchTextField from "./PitchTextField";
import BearingTextField from "./BearingTextField";
import ZoomTextField from "./ZoomTextField";
import ViewDataButton from "./ViewDataButton";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(1),
  },
}));

export default function ControlPanel(props) {
  const classes = useStyles();

  return (
    <Box>
      <MapTheme boxStyle={classes.boxStyle} />

      <AddLayerMenu boxStyle={classes.boxStyle} />
      <EditLayersButton boxStyle={classes.boxStyle} />
      <ViewDataButton boxStyle={classes.boxStyle} />
      <PitchTextField
        boxStyle={classes.boxStyle}
        viewState={props.viewState}
        setViewState={props.setViewState}
      />
      <BearingTextField
        boxStyle={classes.boxStyle}
        viewState={props.viewState}
        setViewState={props.setViewState}
      />
      <ZoomTextField
        boxStyle={classes.boxStyle}
        viewState={props.viewState}
        setViewState={props.setViewState}
      />
    </Box>
  );
}
