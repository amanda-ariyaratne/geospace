import React, { useState } from "react";

// material-ui
import {
  Box,
  InputLabel,
  FormControl,
  Select,
  Typography,
} from "@material-ui/core";

export default function CoordinateHeaderPicker(props) {
  const headerList = [];
  for (const key of Object.keys(props.columnObject)) {
    headerList.push(
      <option key={key} value={key}>
        {key} eg: {props.columnObject[key]}
      </option>
    );
  }

  const handleLatitudeSelect = (event) => {
    props.setLatitudeKey(event.target.value);
  };

  const handleLongitudeSelect = (event) => {
    props.setLongitudeKey(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" className={props.boxStyle}>
      <Box>
        <Typography variant="subtitle1">
          The example is shown is the first record of the dataset provided
          above.
        </Typography>
      </Box>
      <Box>
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
      </Box>
    </Box>
  );
}
