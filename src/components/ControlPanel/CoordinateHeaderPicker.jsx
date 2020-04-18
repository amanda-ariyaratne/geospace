import React, { useState } from "react";

// material-ui
import {
  Box,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

export default function CoordinateHeaderPicker(props) {
  const [latitudeHeader, setLatitudeHeader] = useState("");
  const [longitudeHeader, setLongitudeHeader] = useState("");

  const headerList = [];
  for (const key of Object.keys(props.columnObject)) {
    headerList.push(
      <option key={key} value={key}>
        {key} eg: {props.columnObject[key]}
      </option>
    );
    console.log(key, props.columnObject[key]);
  }

  const handleLatitudeSelect = (event) => {
    setLatitudeHeader(event.target.value);
  };

  const handleLongitudeSelect = (event) => {
    setLongitudeHeader(event.target.value);
  };

  return (
    <Box className={props.boxStyle}>
      <FormControl variant="standard" className={props.formControlStyle}>
        <InputLabel htmlFor="my-input">Latitude</InputLabel>
        <Select
          native
          variant="standard"
          value={latitudeHeader}
          onChange={handleLatitudeSelect}
        >
          <option aria-label="None" value="" />
          {headerList}
        </Select>
      </FormControl>
      <FormControl variant="standard" className={props.formControlStyle}>
        <InputLabel htmlFor="my-input">Longitude</InputLabel>
        <Select
          native
          variant="standard"
          value={longitudeHeader}
          onChange={handleLongitudeSelect}
        >
          <option aria-label="None" value="" />
          {headerList}
        </Select>
      </FormControl>
    </Box>
  );
}
