import React, { useState } from "react";

// components
import LCAddDataDialog from "../ChartDialogs/LCAddDataDialog";

// material-ui
import { Box, Button } from "@material-ui/core";

export default function LCAddDataButton(props) {
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
        DATASET
      </Button>
      <LCAddDataDialog open={open} onClose={handleClose} />
    </Box>
  );
}
