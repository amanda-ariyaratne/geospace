import React from "react";
import { CompactPicker } from "react-color";

// material-ui
import { Box, Typography } from "@material-ui/core";

export default function ColorPicker(props) {
  const handleChangeComplete = (color) => {
    console.log(color.rgb);
    props.setColor(color.rgb);
  };

  return (
    <Box display="flex" className={props.boxStyle}>
      <div className={props.labelStyle}>
        <Typography variant="subtitle1">Color</Typography>
      </div>
      <CompactPicker
        color={props.color}
        onChangeComplete={handleChangeComplete}
      />
    </Box>
  );
}
