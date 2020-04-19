import React from "react";

// material-ui
import { Box, InputLabel, FormControl, Select } from "@material-ui/core";

// data
import { layerTypes } from "../../data/layertypes";

export default function LayerPicker(props) {
  const menulist = layerTypes.map((type) => (
    <option key={type.id} value={type.id}>
      {type.name}
    </option>
  ));

  return (
    <Box className={props.boxStyle}>
      <FormControl
        variant="standard"
        className={props.formControlStyle}
        styles={{ position: "relative" }}
      >
        <InputLabel htmlFor="my-input">Layer Type</InputLabel>
        <Select native variant="standard">
          {menulist}
        </Select>
      </FormControl>
    </Box>
  );
}
