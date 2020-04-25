import React, { useState } from "react";

// classes
import Bearing from "../../classes/map/Bearing";

// material-ui
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

export default function BearingTextField(props) {
  const [value, setValue] = useState(props.viewState.longitude);
  const [bearingError, setBearingError] = useState(false);

  const handleChangeBearing = (event) => {
    const bearing = new Bearing(event.target.value);
    if (bearing.isValid()) {
      setBearingError(false);
      setValue(Number(bearing.value));
      return;
    } else {
      setValue(bearing.value);
      setBearingError(true);
    }
  };

  const handleSetClick = (event) => {
    if (!bearingError) {
      setBearingError(false);
      const newViewState = {
        ...props.viewState,
        bearing: value,
      };
      props.setViewState(newViewState);
      return;
    } else {
      setBearingError(true);
    }
  };

  return (
    <Box display="flex" flexDirection="row" className={props.boxStyle}>
      <TextField
        label="Bearing"
        variant="outlined"
        onChange={(e) => handleChangeBearing(e)}
        autoComplete="off"
        error={bearingError}
        fullWidth
        margin="dense"
        color="secondary"
        value={value}
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
