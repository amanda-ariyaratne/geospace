import React, { useState } from "react";

// material-ui
import { Box, Button } from "@material-ui/core";

export default function LCAddDataButton(props) {
  const handleClick = () => {
    props.setLastDrawLocation(null);
  };

  return (
    <Box className={props.boxStyle}>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={handleClick}
      >
        RESET ZOOM
      </Button>
    </Box>
  );
}
