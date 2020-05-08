import React, { useState } from "react";

// material-ui
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// components
import LayerName from "./LayerName";
import HMRadiusSlider from "./HMRadiusSlider";
import IntensitySlider from "./IntensitySlider";

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

export default function EditHeatMapLayerDialog(props) {
  const classes = useModelStyles();
  const { onClose, open, layer, index } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const prevRadius = layer.radiusPixels;
  const prevIntensity = layer.intensity;
  const prevName = layer.name;
  const prevShowOnHover = layer.showOnHover;
  const headers = layer.dataTable.headers;

  const [intensity, setIntensity] = useState(prevIntensity);
  const [name, setName] = useState(prevName);
  const [radius, setRadius] = useState(prevRadius);
  const [showOnHover, setShowOnHover] = useState(prevShowOnHover);

  const handleClose = () => {
    onClose();
  };

  const dispatch = useDispatch();

  const handleSave = () => {
    layer.intensity = intensity;
    layer.name = name;
    layer.radiusPixels = radius;
    layer.showOnHover = showOnHover;

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
      <DialogTitle>Edit HeatMap</DialogTitle>

      <LayerName
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        name={name}
        setName={setName}
      />

      <HMRadiusSlider
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        radius={radius}
        setRadius={setRadius}
      />

      <IntensitySlider
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        intensity={intensity}
        setIntensity={setIntensity}
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
