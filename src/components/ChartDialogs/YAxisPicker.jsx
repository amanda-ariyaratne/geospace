import React from "react";

// material-ui
import { Box, InputLabel, FormControl, Select } from "@material-ui/core";

export default function YAxisPicker(props) {
  const headerList = props.headers.map((key, index) => {
    return (
      <option key={key} value={index}>
        {key}
      </option>
    );
  });

  const handleYAxisSelect = (event) => {
    props.setYAxis(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" className={props.boxStyle}>
      <Box>
        <FormControl variant="standard" className={props.formControlStyle}>
          <InputLabel>Y Axis</InputLabel>
          <Select
            native
            variant="standard"
            value={props.yAxis}
            onChange={handleYAxisSelect}
          >
            <option aria-label="None" value="" />
            {headerList}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
