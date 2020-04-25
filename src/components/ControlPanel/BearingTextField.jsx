import React, { useState } from "react";

// classes
import Bearing from "../../classes/map/Bearing";

// material-ui
import { Box, InputAdornment, TextField, Tooltip } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

export default function BearingTextField(props) {
  const [bearingError, setBearingError] = useState(false);

  const handleChangeBearing = (event) => {
    const bearing = new Bearing(event.target.value);
    if (bearing.isValid()) {
      setBearingError(false);
      const newViewState = {
        ...props.viewState,
        bearing: Number(bearing.value),
      };
      props.setViewState(newViewState);
      return;
    } else {
      setBearingError(true);
    }
  };

  return (
    <Box className={props.boxStyle}>
      <TextField
        label="Bearing"
        variant="outlined"
        onChange={(e) => handleChangeBearing(e)}
        autoComplete="off"
        error={bearingError}
        fullWidth
        margin="dense"
        value={props.viewState.bearing.toFixed(2)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="0 or higher" arrow>
                <InfoIcon fontSize="small" />
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
