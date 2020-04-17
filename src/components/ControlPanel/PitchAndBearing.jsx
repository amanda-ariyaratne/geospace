import React, { useState } from "react";

// classes
import Pitch from "../../classes/map/Pitch";

// material-ui
import { Box, InputAdornment, TextField, Tooltip } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

// redux
import { setPitch, setBearing } from "../../state/actions/viewstate";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function PitchAndBearing(props) {
  const [pitchError, setPitchError] = useState(false);

  const dispatch = useDispatch();

  const handleChangePitch = (event) => {
    const pitch = new Pitch(event.target.value);
    if (pitch.isValid()) {
      dispatch(setPitch(pitch.value));
      setPitchError(false);
      return;
    } else {
      setPitchError(true);
    }
  };

  const handleChangeBearing = (event) => {
    // const pitch = new Pitch(event.target.value);
    // if (pitch.isValid()) {
    dispatch(setBearing(event.target.value));
    //   setError(false);
    //   return;
    // } else {
    //   setError(true);
    // }
  };

  const currentPitch = useSelector((state) => state.viewstate.pitch);
  const currentBearing = useSelector((state) => state.viewstate.bearing);

  return (
    <Box className={props.boxStyle}>
      <TextField
        label="Pitch"
        variant="outlined"
        onChange={(e) => handleChangePitch(e)}
        autoComplete="off"
        error={pitchError}
        style={{ width: 103, marginRight: 4 }}
        value={currentPitch}
        margin="dense"
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

      <TextField
        label="Bearing"
        variant="outlined"
        onChange={(e) => handleChangeBearing(e)}
        autoComplete="off"
        error={false}
        style={{ width: 103, marginLeft: 4 }}
        margin="dense"
        value={currentBearing}
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
