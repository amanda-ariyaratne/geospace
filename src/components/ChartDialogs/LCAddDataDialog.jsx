import React, { useState } from "react";

// components
import LCFileUploadButton from "./LCFileUploadButton";

// material-ui
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// classes
import DataFile from "../../classes/data/DataFile";

// redux
import { addRawData } from "../../state/actions/linechart";
import { useDispatch } from "react-redux";

// helpers
import { isValidFile } from "../../classes/data/FileHelper";

const useModelStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px 40px",
  },
  box: {
    padding: "10px 40px",
  },
  dialogClose: {
    color: theme.palette.primary.dark,
  },
  dialogSave: {
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

export default function LCAddDataDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;

  const [file, setFile] = useState(null);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [fileUploadErrorMessage, setFileUploadErrorMessage] = useState("");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
  };

  const handleFileRemove = () => {
    setFile(null);
    setFileUploadError(false);
    setFileUploadErrorMessage("");
  };

  const handleFileUpload = (file) => {
    setFile(file);

    if (!file) {
      setFileUploadError(true);
      setFileUploadErrorMessage("No file selected");
      return;
    }
    if (!isValidFile(file.name, [".csv", ".xlsx", ".xls"])) {
      setFileUploadError(true);
      setFileUploadErrorMessage("Wrong format");
      return;
    }
    setFileUploadError(false);
    setFileUploadErrorMessage("");
  };

  const handleSave = () => {
    if (!file) {
      setFileUploadError(true);
      setFileUploadErrorMessage("No file selected");
      return;
    }

    const datafile = new DataFile(file);
    datafile
      .readFromFile()
      .then((datafile) => {
        const headers = datafile.getKeys();
        const lineChart = {
          rawData: datafile.jsonData,
          headers: headers,
        };
        dispatch(addRawData(lineChart));
        //restoreDefaults();
        onClose();
      })
      .catch((err) => {
        setFileUploadErrorMessage(err.message);
        setFileUploadError(true);
      });
  };

  const restoreDefaults = () => {
    setFile(null);
    setFileUploadError(false);
    setFileUploadErrorMessage("");
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="md"
        disableBackdropClick
        classes={{
          paper: classes.paper,
        }}
      >
        <DialogTitle id="simple-dialog-title">Upload your dataset</DialogTitle>

        <LCFileUploadButton
          boxStyle={classes.box}
          onUpload={handleFileUpload}
          error={fileUploadError}
          errorMessage={fileUploadErrorMessage}
          fileRemove={handleFileRemove}
        />

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className={classes.dialogClose}
          >
            Close
          </Button>
          <Button autoFocus className={classes.dialogSave} onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
