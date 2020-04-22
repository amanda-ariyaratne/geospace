import React, { useState } from "react";
import { CompactPicker } from "react-color";

// material-ui
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import createSpacing from "@material-ui/core/styles/createSpacing";

const useStyles = makeStyles((theme) => ({
  colorLabel: {
    marginRight: theme.spacing(2),
  },
}));

export default function ColorPicker(props) {
  const classes = useStyles();
  const handleChangeComplete = (color) => {
    console.log(color.rgb);
    props.setColor(color.rgb);
  };

  return (
    <Box display="flex" className={props.boxStyle}>
      <div className={classes.colorLabel}>
        <Typography variant="subtitle1">Choose Color</Typography>
      </div>
      <CompactPicker
        color={props.color}
        width="200"
        onChangeComplete={handleChangeComplete}
      />
    </Box>
  );
}
