import React, { useState } from "react";

// classes
import Zoom from "../../classes/map/Zoom";

// material-ui
import { Box, InputAdornment, TextField, Tooltip } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

export default function ZoomTextField(props) {
  const [zoomError, setZoomError] = useState(false);

  const handleChangeZoom = (event) => {
    const zoom = new Zoom(event.target.value);
    if (zoom.isValid()) {
      setZoomError(false);
      const newViewState = {
        ...props.viewState,
        zoom: Number(zoom.value),
      };
      props.setViewState(newViewState);
      return;
    } else {
      setZoomError(true);
    }
  };

  return (
    <Box className={props.boxStyle}>
      <TextField
        label="Zoom"
        variant="outlined"
        onChange={(e) => handleChangeZoom(e)}
        autoComplete="off"
        error={zoomError}
        fullWidth
        value={props.viewState.zoom.toFixed(2)}
        margin="dense"
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
    </Box>
  );
}
