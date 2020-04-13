import React, { useState } from "react";

// components
import AddLayerDialog from "./AddLayerDialog";

// material-ui
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function AddLayer(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
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
