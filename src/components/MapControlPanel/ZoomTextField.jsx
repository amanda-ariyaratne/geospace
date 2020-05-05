import React, { useState } from "react";

// classes
import Zoom from "../../classes/map/Zoom";

// material-ui
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

export default function ZoomTextField(props) {
  const [value, setValue] = useState(props.viewState.longitude);
  const [zoomError, setZoomError] = useState(false);

  const handleChangeZoom = (event) => {
    const zoom = new Zoom(event.target.value);
    if (zoom.isValid()) {
      setZoomError(false);
      setValue(Number(zoom.value));
      return;
    } else {
      setValue(zoom.value);
      setZoomError(true);
    }
  };

  const handleSetClick = (event) => {
    if (!zoomError) {
      setZoomError(false);
      const newViewState = {
        ...props.viewState,
        zoom: value,
      };
      props.setViewState(newViewState);
      return;
    } else {
      setZoomError(true);
    }
  };

  return (
    <Box display="flex" flexDirection="row" className={props.boxStyle}>
      <TextField
        label="Zoom"
        variant="outlined"
        onChange={(e) => handleChangeZoom(e)}
        autoComplete="off"
        error={zoomError}
        fullWidth
        value={value}
        margin="dense"
        color="secondary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="0 to 20" arrow>
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
