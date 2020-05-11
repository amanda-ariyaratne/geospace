import React from "react";

// material-ui
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";

export default function SDToPicker(props) {
  const handleSelectTo = (event) => {
    props.handleSelectTo(event.target.value);
  };

  return (
    <Box>
      <div className={props.label}>
        <Typography variant="subtitle1">Select To Column</Typography>
      </div>
      <FormControl variant="standard" className={props.formControl}>
        <InputLabel>To</InputLabel>
        <Select
          native
          variant="standard"
          value={props.to}
          onChange={handleSelectTo}
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
