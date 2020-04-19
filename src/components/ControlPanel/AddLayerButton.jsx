import React, { useState } from "react";

// components
import AddScatterplotLayerDialog from "./AddScatterplotLayerDialog";

// material-ui
import { Box, Button } from "@material-ui/core";

export default function AddLayerButton(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={props.boxStyle}>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={handleClickOpen}
      >
        Add Layer
      </Button>
      <AddScatterplotLayerDialog open={open} onClose={handleClose} />
    </Box>
  );
}
