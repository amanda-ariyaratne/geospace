import React, { useState } from "react";

// material-ui
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useModelStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px 40px",
  },
  box: {
    padding: "10px 40px",
  },
  inputLabel: {
    marginRight: theme.spacing(2),
    minWidth: 75,
  },
  listRoot: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
}));

export default function EditLayerListDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth="md"
      disableBackdropClick
      classes={{
        paper: classes.paper,
      }}
    >
      <DialogTitle>Select a Layer</DialogTitle>

      <Box className={classes.box}>
        <List
          component="nav"
          className={classes.listRoot}
          aria-label="mailbox folders"
        >
          <ListItem button>
            <ListItemText primary="Inbox" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <Tooltip title="Edit" placement="left-start">
                  <EditIcon />
                </Tooltip>
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <Tooltip title="Edit" placement="right-start">
                  <DeleteIcon />
                </Tooltip>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </List>
      </Box>

      <DialogActions>
        <Button autoFocus onClick={handleClose} className={classes.close}>
          Close
        </Button>
        <Button autoFocus onClick={handleClose} className={classes.save}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
