import React from "react";

// material-ui
import { Box, InputLabel, FormControl, Select } from "@material-ui/core";

export default function ArcCoordinateHeaderPicker(props) {
  const headerList = props.coordinateHeaders.map((key, index) => {
    return (
      <option key={key} value={index}>
        {key}
      </option>
    );
  });

  const handleStartLatitudeSelect = (event) => {
    console.log(event.target.value);
    props.setStartLatitudeKey(event.target.value);
  };

  const handleStartLongitudeSelect = (event) => {
    console.log(event.target.value);
    props.setStartLongitudeKey(event.target.value);
  };

  const handleEndLatitudeSelect = (event) => {
    console.log(event.target.value);
    props.setEndLatitudeKey(event.target.value);
  };

  const handleEndLongitudeSelect = (event) => {
    console.log(event.target.value);
    props.setEndLongitudeKey(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" className={props.boxStyle}>
      <Box>
        <FormControl variant="standard" className={props.formControlStyle}>
          <InputLabel>Start Longitude</InputLabel>
          <Select
            native
            variant="standard"
            value={props.startLongitudeKey}
            onChange={handleStartLongitudeSelect}
          >
            <option aria-label="None" value="" />
            {headerList}
          </Select>
        </FormControl>
        <FormControl variant="standard" className={props.formControlStyle}>
          <InputLabel>Start Latitude</InputLabel>
          <Select
            native
            variant="standard"
            value={props.startLatitudeKey}
            onChange={handleStartLatitudeSelect}
          >
            <option aria-label="None" value="" />
            {headerList}
          </Select>
        </FormControl>
        <FormControl variant="standard" className={props.formControlStyle}>
          <InputLabel>End Longitude</InputLabel>
          <Select
            native
            variant="standard"
            value={props.endLongitudeKey}
            onChange={handleEndLongitudeSelect}
          >
            <option aria-label="None" value="" />
            {headerList}
          </Select>
        </FormControl>
        <FormControl variant="standard" className={props.formControlStyle}>
          <InputLabel>End Latitude</InputLabel>
          <Select
            native
            variant="standard"
            value={props.endLatitudeKey}
            onChange={handleEndLatitudeSelect}
          >
            <option aria-label="None" value="" />
            {headerList}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
