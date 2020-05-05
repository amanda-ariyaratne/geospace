import React, { useState } from "react";

// components
import ModifyDataDialog from "../ChartDialogs/ModifyDataDialog";

// material-ui
import { Box, Button } from "@material-ui/core";

export default function ModifyChartButton(props) {
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
      <ModifyDataDialog open={open} onClose={handleClose} />
    </Box>
  );
}
