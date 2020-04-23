import React from "react";

// material-ui
import { Box, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function OpacitySlider(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setName(event.target.value);
  };

  return (
    <Box display="flex" className={props.boxStyle}>
      <div className={props.labelStyle}>
        <Typography variant="subtitle1">Name</Typography>
      </div>
      <TextField value={props.name} onChange={handleChange} />
    </Box>
  );
}
