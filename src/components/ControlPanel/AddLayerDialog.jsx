import React, { useState } from "react";

// components
import FileUploadButton from "./FileUploadButton";
import CoordinateHeaderPicker from "./CoordinateHeaderPicker";
import LayerPicker from "./LayerPicker";

// material-ui
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// classes
import Scatterplot from "../../classes/map/Scatterplot";
import DataFile from "../../classes/data/DataFile";

// redux
import { addLayer } from "../../state/actions/layers";
import { useDispatch } from "react-redux";

// data
import { layerTypes } from "../../data/layertypes";
import shortid from "shortid";

const useModelStyles = makeStyles((theme) => ({
  box: {
    padding: "10px 40px",
  },
  close: {
    color: theme.palette.primary.dark,
  },
  save: {
    color: theme.palette.primary.light,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  input: {
    display: "none",
  },
  btnUpload: {
    marginRight: theme.spacing(1),
  },
}));

export default function AddLayerDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [fileUploadErrorMessage, setFileUploadErrorMessage] = useState("");
  const [data, setData] = useState(null);
  const [coordinateHeaders, setCoordinateHeaders] = useState(null);
  const [latitudeKey, setLatitudeKey] = useState("");
  const [longitudeKey, setLongitudeKey] = useState("");

  const handleSave = () => {
    if (!file) {
      setFileUploadError(true);
      setFileUploadErrorMessage("No file selected");
      return;
    }

    const layerInstance = new Scatterplot(data);
    layerInstance.setPosition(latitudeKey, longitudeKey);
    const layer = layerInstance.render();
    dispatch(addLayer(layer));
    onClose();
  };

  const handleFileUpload = (file) => {
    setFile(file);
    if (!file) {
      setFileUploadError(true);
      setFileUploadErrorMessage("No file selected");
      return;
    }
    const datafile = new DataFile(file);
    datafile
      .extractTextAsync()
      .then((datafile) => {
        return datafile.parseToJsonArray();
      })
      .then((datafile) => {
        setData(datafile.getJsonData());
        const coordinateHeaders = datafile.getAttributesObject();

        setCoordinateHeaders(coordinateHeaders);
      })
      .catch((err) => {
        setFileUploadErrorMessage(err.message);
        setFileUploadError(true);
      });
  };

  const handleFileRemove = () => {
    setFile(null);
  };

  const handleClose = () => {
    restoreDefaults();
    onClose();
  };

  const restoreDefaults = () => {
    setFile(null);
    setFileUploadError(false);
    setFileUploadErrorMessage("");
    setData(null);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth="md"
      disableBackdropClick
    >
      <DialogTitle id="simple-dialog-title">Add a new layer</DialogTitle>

      <LayerPicker
        boxStyle={classes.box}
        formControlStyle={classes.formControl}
      />

      <FileUploadButton
        boxStyle={classes.box}
        onUpload={handleFileUpload}
        error={fileUploadError}
        errorMessage={fileUploadErrorMessage}
        fileRemove={handleFileRemove}
      />

      {coordinateHeaders && (
        <CoordinateHeaderPicker
          boxStyle={classes.box}
          formControlStyle={classes.formControl}
          columnObject={coordinateHeaders}
          latitudeKey={latitudeKey}
          setLatitudeKey={setLatitudeKey}
          longitudeKey={longitudeKey}
          setLongitudeKey={setLongitudeKey}
        />
      )}

      <DialogActions>
        <Button autoFocus onClick={handleClose} className={classes.close}>
          Close
        </Button>
        <Button autoFocus onClick={handleSave} className={classes.save}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
