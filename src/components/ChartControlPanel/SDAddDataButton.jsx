import React, { useState } from "react";

// components
import SDAddDataDialog from "../ChartDialogs/SDAddDataDialog";

// material-ui
import { Box, Button } from "@material-ui/core";

export default function SDAddDataButton(props) {
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
      <SDAddDataDialog open={open} onClose={handleClose} />
    </Box>
  );
}
