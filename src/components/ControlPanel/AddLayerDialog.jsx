import React, { useState } from "react";

// components
import FileUploadButton from "./FileUploadButton";

// material-ui
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// classes
import Scatterplot from "../../classes/Scatterplot";

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
  const { onClose, selectedValue, open } = props;
  const menulist = layerTypes.map((type) => (
    <option key={type.id} value={type.id}>
      {type.name}
    </option>
  ));
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [fileUploadError, setFileUploadError] = useState(false);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSave = () => {
    if (!file) {
      setFileUploadError(true);
      return;
    }
    // const layerData = {
    //   id: shortid.generate(),
    //   data: data,
    //   radiusScale: 1,
    //   pickable: false,
    //   opacity: 0.5,
    //   getRadius: 1,
    //   radiusMinPixels: 1,
    //   getColor: [255, 0, 0],
    // };
    // const layerInstance = new Scatterplot(layerData);
    // const layer = layerInstance.render();
    // dispatch(addLayer(layer));
    // onClose(selectedValue);
  };

  const handleFileUpload = (file) => {
    setFile(file);
    // const fr = new FileReader();
    // const parseJSON = (text) => JSON.parse(text);
    // fr.onload = (e) => {
    //   const dataString = e.target.result;
    //   const data = parseJSON(dataString);
    //   setData(data);
    // };
    // fr.readAsText(file);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitle id="simple-dialog-title">Add a new layer</DialogTitle>
      <Box className={classes.box}>
        <FormControl
          variant="standard"
          className={classes.formControl}
          styles={{ position: "relative" }}
        >
          <InputLabel htmlFor="my-input">Layer Type</InputLabel>
          <Select native variant="standard">
            {menulist}
          </Select>
        </FormControl>
      </Box>

      <FileUploadButton
        boxStyle={classes.box}
        onUpload={handleFileUpload}
        error={fileUploadError}
      />

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
