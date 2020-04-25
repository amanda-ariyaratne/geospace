import React, { useState } from "react";

// classes
import Latitude from "../../classes/map/Latitude";

// material-ui
import {
  Box,
  InputAdornment,
  TextField,
  Tooltip,
  Button,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

export default function LatitudeTextField(props) {
  const [value, setValue] = useState(props.viewState.latitude);
  const [latitudeError, setLatitudeError] = useState(false);

  const handleChangeLatitude = (event) => {
    const latitude = new Latitude(event.target.value);
    if (latitude.isValid()) {
      setLatitudeError(false);
      setValue(Number(latitude.value));
      return;
    } else {
      setValue(latitude.value);
      setLatitudeError(true);
    }
  };

  const handleSetClick = (event) => {
    if (!latitudeError) {
      setLatitudeError(false);
      const newViewState = {
        ...props.viewState,
        latitude: value,
      };
      props.setViewState(newViewState);
      return;
    } else {
      setLatitudeError(true);
    }
  };

  return (
    <Box display="flex" flexDirection="row" className={props.boxStyle}>
      <TextField
        label="Latitude"
        variant="outlined"
        onChange={(e) => handleChangeLatitude(e)}
        autoComplete="off"
        error={latitudeError}
        value={value}
        margin="dense"
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="-90 to 90" arrow>
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
