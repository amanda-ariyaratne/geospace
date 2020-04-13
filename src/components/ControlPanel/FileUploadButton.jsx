import React, { useState } from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  btnUpload: {
    marginRight: theme.spacing(1),
  },
}));

export default function FileUploadButton(props) {
  const classes = useStyles();

  const [uploadFile, setUploadFile] = useState({ name: "" });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadFile(file);
    props.onUpload(file);
  };

  return (
    <Box className={props.boxStyle}>
      <input
        accept="application/JSON"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={(e) => {
          handleFileUpload(e);
        }}
      />
      <label htmlFor="contained-button-file" className={classes.btnUpload}>
        <Button
          variant="contained"
          color="primary"
          component="span"
          className="btnUpload"
        >
          Choose file
        </Button>
      </label>
      {uploadFile ? (
        <TextField disabled value={uploadFile.name} />
      ) : (
        <TextField disabled />
      )}
    </Box>
  );
}
