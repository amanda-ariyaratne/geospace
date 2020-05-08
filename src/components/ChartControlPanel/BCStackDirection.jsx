import React from "react";

// material-ui
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function BCStackBy(props) {
  const handleChange = (event) => {
    props.handleStackBy(event.target.value);
  };
  return (
    <Box className={props.boxStyle}>
      <FormControl component="fieldset" className={props.formControl}>
        <FormLabel component="legend">Stack Direction</FormLabel>
        <RadioGroup
          aria-label="stack"
          name="stack1"
          value={props.stackBy}
          onChange={handleChange}
        >
          <FormControlLabel value="x" control={<Radio />} label="X Axis" />
          <FormControlLabel value="y" control={<Radio />} label="Y Axis" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
