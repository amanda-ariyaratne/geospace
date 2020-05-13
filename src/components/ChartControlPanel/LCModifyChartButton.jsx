import React, { useState } from "react";

// components
import LCModifyDataDialog from "../ChartDialogs/LCModifyDataDialog";

// material-ui
import { Box, Button } from "@material-ui/core";

export default function LCModifyChartButton(props) {
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
        color="primary"
        fullWidth
        onClick={handleClickOpen}
      >
        CHART
      </Button>
      <LCModifyDataDialog open={open} onClose={handleClose} />
    </Box>
  );
}
