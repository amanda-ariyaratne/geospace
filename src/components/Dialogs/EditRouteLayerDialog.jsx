import React, { useState } from "react";

// material-ui
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// components
import OpacitySlider from "./OpacitySlider";
import MetadataSelector from "./MetadataSelector";
import LayerName from "./LayerName";
import WidthSlider from "./WidthSlider";

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

export default function EditRouteLayerDialog(props) {
  const classes = useModelStyles();
  const { onClose, open, layer, index } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const prevOpacity = layer.opacity;
  const prevName = layer.name;
  const prevWidth = layer.widthScale;
  const prevShowOnHover = layer.showOnHover;
  const headers = layer.dataTable.headers;

  const [opacity, setOpacity] = useState(prevOpacity);
  const [name, setName] = useState(prevName);
  const [width, setWidth] = useState(prevWidth);
  const [showOnHover, setShowOnHover] = useState(prevShowOnHover);

  const handleClose = () => {
    onClose();
  };

  const dispatch = useDispatch();

  const handleSave = () => {
    layer.opacity = opacity;
    layer.name = name;
    layer.widthScale = width;
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
      <DialogTitle>Edit Route</DialogTitle>

      <LayerName
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        name={name}
        setName={setName}
      />

      <OpacitySlider
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        opacity={opacity}
        setOpacity={setOpacity}
      />

      <WidthSlider
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        width={width}
        setWidth={setWidth}
      />

      <MetadataSelector
        boxStyle={classes.box}
        labelStyle={classes.inputLabel}
        headers={headers}
        showOnHover={showOnHover}
        setShowOnHover={setShowOnHover}
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
