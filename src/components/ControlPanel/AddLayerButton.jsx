import React, { useState } from "react";

// components
import AddLayerDialog from "./AddLayerDialog";

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
      <AddLayerDialog open={open} onClose={handleClose} />
    </Box>
  );
}