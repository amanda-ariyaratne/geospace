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
import LayerName from "./LayerName";
import RadiusSlider from "./RadiusSlider";

// helper functions
import { getJsonObjectFromArray } from "../../classes/data/JsonHelper";

// redux
import { updateLayer } from "../../state/actions/layers";
import { useDispatch } from "react-redux";

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
  dialogClose: {
    color: theme.palette.primary.dark,
  },
  dialogSave: {
    color: theme.palette.primary.light,
  },
}));

export default function EditScatterplotLayerDialog(props) {
  const classes = useModelStyles();
  const { onClose, open, layer, index } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const prevColor = getJsonObjectFromArray(layer.getColor, ["r", "g", "b"]);
  const prevOpacity = layer.opacity;
  const prevName = layer.name;
  const prevRadius = layer.radiusMinPixels;

  const [color, setColor] = useState(prevColor);
  const [opacity, setOpacity] = useState(prevOpacity);
  const [name, setName] = useState(prevName);
  const [radius, setRadius] = useState(prevRadius);

  const handleClose = () => {
    onClose();
  };

  const dispatch = useDispatch();

  const handleSave = () => {
    layer.getColor = [color["r"], color["g"], color["b"]];
    layer.opacity = opacity;
    layer.name = name;
    layer.radiusMinPixels = radius;

    dispatch(updateLayer(layer, index));
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

      <LayerName
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        name={name}
        setName={setName}
      />

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

      <RadiusSlider
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        radius={radius}
        setRadius={setRadius}
      />

      <MetadataSelector
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
      />
      <DialogActions>
        <Button autoFocus onClick={handleClose} className={classes.dialogClose}>
          Close
        </Button>
        <Button autoFocus onClick={handleSave} className={classes.dialogSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
