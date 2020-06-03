import React, { useState } from "react";

// components
import DataTableListDialog from "../MapDialogs/DataTableListDialog";

// material-ui
import { Box, Button } from "@material-ui/core";

export default function ViewDataButton(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box className={props.boxStyle}>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={handleClickOpen}
        >
          VIEW DATA
        </Button>
      </Box>
      {/* <DataTableListDialog open={open} onClose={handleClose} /> */}
    </React.Fragment>
  );
}
