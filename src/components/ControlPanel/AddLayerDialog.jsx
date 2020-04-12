import React, { useState } from "react";

// components
import FileUploadButton from "./FileUploadButton";

// material-ui
import { Box, DialogActions, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";

// redux
import { addLayer } from "../../actions/layers";
import { useDispatch } from "react-redux";

// data
import { layerTypes } from "../../data/layertypes";

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
  const [data, setData] = useState({});

  const handleClose = () => {
    onClose(selectedValue);
  };

  const dispatch = useDispatch();
  const handleSave = () => {
    const layer = {
      data: data,
      description: "this is my new layer",
    };
    dispatch(addLayer(layer));
    onClose(selectedValue);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFileUpload = (file) => {
    const fr = new FileReader();
    const parseJSON = (text) => JSON.parse(text);
    fr.onload = (e) => {
      const dataString = e.target.result;
      const data = parseJSON(dataString);
      setData(data);
    };
    fr.readAsText(file);
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

      <FileUploadButton boxStyle={classes.box} onUpload={handleFileUpload} />

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
