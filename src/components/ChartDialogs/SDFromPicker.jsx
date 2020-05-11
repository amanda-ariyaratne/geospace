import React from "react";

// material-ui
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";

export default function SDFromPicker(props) {
  const handleSelectFrom = (event) => {
    props.handleSelectFrom(event.target.value);
  };

  return (
    <Box>
      <div className={props.label}>
        <Typography variant="subtitle1">Select From Column</Typography>
      </div>
      <FormControl variant="standard" className={props.formControl}>
        <InputLabel>From</InputLabel>
        <Select
          native
          variant="standard"
          value={props.from}
          onChange={handleSelectFrom}
        >
          <option aria-label="None" value="" />
          {props.headers.map((header, index) => {
            return (
              <option key={index} value={index}>
                {header}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
