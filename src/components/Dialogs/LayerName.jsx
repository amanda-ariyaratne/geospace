import React from "react";

// material-ui
import { Box, TextField, Typography } from "@material-ui/core";

export default function OpacitySlider(props) {
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
