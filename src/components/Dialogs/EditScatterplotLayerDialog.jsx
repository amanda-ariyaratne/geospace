import React, { useState } from "react";

// material-ui
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// components
import ColorPicker from "./ColorPicker";
import OpacitySlider from "./OpacitySlider";
import MetadataSelector from "./MetadataSelector";

const useModelStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px 40px",
  },
  box: {
    padding: "10px 40px",
  },
  inputLabel: {
    marginRight: theme.spacing(2),
    minWidth: 75,
  },
}));

const DEFAULT_COLOR = {
  r: 255,
  g: 0,
  b: 0,
};

export default function EditScatterplotLayerDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [color, setColor] = useState(DEFAULT_COLOR);
  const [opacity, setOpacity] = useState(0.5);

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth="md"
      disableBackdropClick
      classes={{
        paper: classes.paper,
      }}
    >
      <DialogTitle>Edit Scatterplot</DialogTitle>

      <ColorPicker
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        color={color}
        setColor={setColor}
      />
      <OpacitySlider
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        opacity={opacity}
        setOpacity={setOpacity}
      />

      <MetadataSelector
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
      />
      <DialogActions>
        <Button autoFocus onClick={handleClose} className={classes.close}>
          Close
        </Button>
        <Button autoFocus onClick={handleClose} className={classes.save}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
