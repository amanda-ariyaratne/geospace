import React, { useState } from "react";

// classes
import Longitude from "../../classes/map/Longitude";

// material-ui
import {
  Box,
  InputAdornment,
  TextField,
  Tooltip,
  Button,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

export default function LongitudeTextField(props) {
  const [value, setValue] = useState(props.viewState.longitude);
  const [longitudeError, setLongitudeError] = useState(false);

  const handleChangeLongitude = (event) => {
    const longitude = new Longitude(event.target.value);
    if (longitude.isValid()) {
      setLongitudeError(false);
      setValue(Number(longitude.value));
      return;
    } else {
      setValue(longitude.value);
      setLongitudeError(true);
    }
  };

  const handleSetClick = (event) => {
    if (!longitudeError) {
      setLongitudeError(false);
      const newViewState = {
        ...props.viewState,
        longitude: value,
      };
      props.setViewState(newViewState);
      return;
    } else {
      setLongitudeError(true);
    }
  };

  return (
    <Box display="flex" flexDirection="row" className={props.boxStyle}>
      <TextField
        label="Longitude"
        variant="outlined"
        onChange={(e) => handleChangeLongitude(e)}
        autoComplete="off"
        error={longitudeError}
        value={value}
        margin="dense"
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="-180 to 180" arrow>
                <InfoIcon fontSize="small" />
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
      <Button
        style={{ marginTop: 8, marginBottom: 4 }}
        variant="outlined"
        color="primary"
        onClick={handleSetClick}
      >
        SET
      </Button>
    </Box>
  );
}
