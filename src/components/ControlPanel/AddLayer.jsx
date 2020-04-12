import React, { useState } from "react";

// components
import AddLayerDialog from "./AddLayerDialog";

// material-ui
import { Box, DialogActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useButtonStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddLayer() {
  const classes = useButtonStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Box className={classes.button}>
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
