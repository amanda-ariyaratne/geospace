import React, { useState } from "react";

// components
import ShareDialog from "./ShareDialog";

// material-ui
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(2, 1),
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));

export default function ShareButton(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.boxStyle}>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={handleClickOpen}
      >
        SHARE
      </Button>
<<<<<<< HEAD
      <ShareDialog
        open={open}
        onClose={handleClose}
        viewState={props.viewState}
      />
=======
      <ShareDialog open={open} onClose={handleClose} />
>>>>>>> d0b8b5a60233aab4c69da06912ceaf32d14ce176
    </Box>
  );
}
