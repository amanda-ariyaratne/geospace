import React from "react";

// material-ui
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function SDWeightPicker(props) {
  const handleSpecifyWeightChange = (event) => {
    props.handleSpecifyWeightChange(event.target.value);
  };

  const handleSelectWeight = (event) => {
    props.handleSelectWeight(event.target.value);
  };

  const specifyWeight = props.specifyWeight === 1 ? "yes" : "no";

  return (
    <Box pt={3} display="flex" flexDirection="column">
      <Typography>
        Do you want to specify a weight column for the dataset?
      </Typography>
      <FormControl component="fieldset">
        {/* <FormLabel component="legend">Gender</FormLabel> */}
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={specifyWeight}
          onChange={handleSpecifyWeightChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      {specifyWeight === "yes" ? (
        <FormControl
          variant="standard"
          className={props.formControl}
          style={{ width: 100 }}
        >
          <InputLabel>Weight</InputLabel>
          <Select
            native
            variant="standard"
            value={props.weight}
            onChange={handleSelectWeight}
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
      ) : null}
    </Box>
  );
}
