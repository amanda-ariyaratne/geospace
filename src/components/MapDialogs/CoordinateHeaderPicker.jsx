import React from "react";

// material-ui
import { Box, InputLabel, FormControl, Select } from "@material-ui/core";

export default function CoordinateHeaderPicker(props) {
  const headerList = props.coordinateHeaders.map((key, index) => {
    return (
      <option key={key} value={index}>
        {key}
      </option>
    );
  });

  const handleLatitudeSelect = (event) => {
    props.setLatitudeKey(event.target.value);
  };

  const handleLongitudeSelect = (event) => {
    props.setLongitudeKey(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" className={props.boxStyle}>
      <Box>
        <FormControl variant="standard" className={props.formControlStyle}>
          <InputLabel>Longitude</InputLabel>
          <Select
            native
            variant="standard"
            value={props.longitudeKey}
            onChange={handleLongitudeSelect}
          >
            <option aria-label="None" value="" />
            {headerList}
          </Select>
        </FormControl>
        <FormControl variant="standard" className={props.formControlStyle}>
          <InputLabel>Latitude</InputLabel>
          <Select
            native
            variant="standard"
            value={props.latitudeKey}
            onChange={handleLatitudeSelect}
          >
            <option aria-label="None" value="" />
            {headerList}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
