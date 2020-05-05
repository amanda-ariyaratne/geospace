import React, { useState } from "react";

// classes
import Pitch from "../../classes/map/Pitch";

// material-ui
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

export default function PitchTextField(props) {
  const [value, setValue] = useState(props.viewState.longitude);
  const [pitchError, setPitchError] = useState(false);

  const handleChangePitch = (event) => {
    const pitch = new Pitch(event.target.value);
    if (pitch.isValid()) {
      setPitchError(false);
      setValue(Number(pitch.value));
      return;
    } else {
      setValue(pitch.value);
      setPitchError(true);
    }
  };

  const handleSetClick = (event) => {
    if (!pitchError) {
      setPitchError(false);
      const newViewState = {
        ...props.viewState,
        pitch: value,
      };
      props.setViewState(newViewState);
      return;
    } else {
      setPitchError(true);
    }
  };

  return (
    <Box display="flex" flexDirection="row" className={props.boxStyle}>
      <TextField
        label="Pitch"
        variant="outlined"
        onChange={(e) => handleChangePitch(e)}
        autoComplete="off"
        error={pitchError}
        fullWidth
        value={value}
        margin="dense"
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="0 to 60" arrow>
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
