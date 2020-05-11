import React, { useState } from "react";

// components
import FileUploadButton from "./FileUploadButton";
import ArcCoordinateHeaderPicker from "./ArcCoordinateHeaderPicker";
import SplashScreen from "../SplashScreen";

// material-ui
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Box,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// classes
import Route from "../../classes/map/Route";
import DataFile from "../../classes/data/DataFile";

// redux
import { addLayer } from "../../state/actions/layers";
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

export default function AddRouteLayerDialog(props) {
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
  const [startLongitudeKey, setStartLongitudeKey] = useState("");
  const [startLatitudeKey, setStartLatitudeKey] = useState("");
  const [endLongitudeKey, setEndLongitudeKey] = useState("");
  const [endLatitudeKey, setEndLatitudeKey] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    if (!file) {
      setFileUploadError(true);
      setFileUploadErrorMessage("No file selected");
      return;
    }

    const layerInstance = new Route(
      data,
      coordinateHeaders,
      startLatitudeKey,
      startLongitudeKey,
      endLatitudeKey,
      endLongitudeKey
    );
    setLoading(true);
    layerInstance.dataTable.callFetchDataFromGoogleApi().then(() => {
      setLoading(false);
      dispatch(addLayer(layerInstance));
      restoreDefaults();
      onClose();
    });
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
    const datafile = new DataFile(file);
    setLoading(true);
    datafile
      .readFromFile()
      .then((datafile) => {
        setLoading(false);
        setData(datafile.jsonData);
        const coordinateHeaders = datafile.getKeys();
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
    setCoordinateHeaders(null);
    setStartLongitudeKey("");
    setStartLatitudeKey("");
    setEndLongitudeKey("");
    setEndLatitudeKey("");
  };

  const handleMenuClose = () => {
    props.handleMenuClose();
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
        onEnter={handleMenuClose}
        classes={{
          paper: classes.paper,
        }}
      >
        <DialogTitle id="simple-dialog-title">Add a new Arc Layer</DialogTitle>

        {loading ? (
          <Box className={classes.box}>
            <LinearProgress color="secondary" />
          </Box>
        ) : null}

        <Box className={classes.box}>
          <Box>
            <Typography variant="subtitle1">
              Please make sure your dataset contain columns for latitude and
              longitude of arc starting place and arc ending place.
            </Typography>
          </Box>
        </Box>

        <FileUploadButton
          boxStyle={classes.box}
          onUpload={handleFileUpload}
          error={fileUploadError}
          errorMessage={fileUploadErrorMessage}
          fileRemove={handleFileRemove}
        />

        {coordinateHeaders && !fileUploadError && (
          <React.Fragment>
            <Box className={classes.box}>
              <Typography variant="subtitle1">
                Select the column name of longitude and latitude values
                respectively.
              </Typography>
            </Box>
            <ArcCoordinateHeaderPicker
              boxStyle={classes.box}
              formControlStyle={classes.formControl}
              coordinateHeaders={coordinateHeaders}
              startLongitudeKey={startLongitudeKey}
              setStartLongitudeKey={setStartLongitudeKey}
              startLatitudeKey={startLatitudeKey}
              setStartLatitudeKey={setStartLatitudeKey}
              endLongitudeKey={endLongitudeKey}
              setEndLongitudeKey={setEndLongitudeKey}
              endLatitudeKey={endLatitudeKey}
              setEndLatitudeKey={setEndLatitudeKey}
            />
          </React.Fragment>
        )}

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className={classes.dialogClose}
          >
            Close
          </Button>
          <Button autoFocus onClick={handleSave} className={classes.dialogSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <SplashScreen open={loading} />
    </React.Fragment>
  );
}
