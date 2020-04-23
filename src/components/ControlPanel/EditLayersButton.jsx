import React, { useState } from "react";

// components
import EditLayerListDialog from "../Dialogs/EditLayerListDialog";

// material-ui
import { Box, Button } from "@material-ui/core";

export default function EditLayersButton(props) {
  const [open, setOpen] = useState(true);

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
          EDIT LAYERS
        </Button>
      </Box>
      <EditLayerListDialog open={open} onClose={handleClose} />
    </React.Fragment>
  );
}
