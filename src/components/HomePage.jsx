import React, { useState } from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

// classes
import DataFile from "../classes/data/DataFile";

// helpers
import { isValidFile } from "../classes/data/FileHelper";

// redux
import { addDatafile } from "../state/actions/datafile";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg})`,
    height: "100%",
    position: "relative",
    "& > *": {
      padding: "10px 5px",
    },
  },
  input: {
    display: "none",
  },
  progress: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const bg = "bg.jpeg";

export default function HomePage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [fileErrorMessage, setFileErrorMessage] = useState(null);
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (!file) {
      setFileError(true);
      setFileErrorMessage("No file selected");
      return;
    }
    if (!isValidFile(file.name, [".csv", ".xlsx", ".xls"])) {
      setFileError(true);
      setFileErrorMessage("Wrong format");
      return;
    }
    setFileError(false);
    setFileErrorMessage(null);
    const datafile = new DataFile(file);
    setLoading(true);
    datafile
      .readFromFile()
      .then((datafile) => {
        dispatch(addDatafile(datafile));
        setLoading(false);
        props.history.push("/help");
      })
      .catch((err) => {
        console.log(err);
        setFileErrorMessage(err.message);
        setFileError(true);
        setLoading(false);
      });
  };

  return (
    <Box
      className={classes.bg}
      flexGrow={1}
      order={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1" style={{ fontWeight: "bold" }}>
        Ascent
      </Typography>
      <Typography variant="h3" color="primary" style={{ fontWeight: "bold" }}>
        A platform to visualize your transportation datasets instantly
      </Typography>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        Upload your dataset to get started
      </Typography>
      <div>
        <input
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => {
            handleFileUpload(e);
          }}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="primary"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </label>{" "}
      </div>
      {loading ? (
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography variant="subtitle1">
            Please wait while we process your dataset
          </Typography>
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        </Box>
      ) : null}

      {fileError ? (
        <Typography variant="subtitle1" color="error">
          {fileErrorMessage}
        </Typography>
      ) : null}
    </Box>
  );
}
