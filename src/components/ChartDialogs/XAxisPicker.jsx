import React from "react";

// material-ui
import { Box, InputLabel, FormControl, Select } from "@material-ui/core";

export default function XAxisPicker(props) {
  const headerList = props.headers.map((key, index) => {
    return (
      <option key={key} value={index}>
        {key}
      </option>
    );
  });

  const handleXAxisSelect = (event) => {
    props.setXAxis(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" className={props.boxStyle}>
      <Box>
        <FormControl variant="standard" className={props.formControlStyle}>
          <InputLabel>X Axis</InputLabel>
          <Select
            native
            variant="standard"
            value={props.xAxis}
            onChange={handleXAxisSelect}
          >
            <option aria-label="None" value="" />
            {headerList}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
