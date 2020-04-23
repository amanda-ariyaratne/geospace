import React from "react";

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
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

// redux
import { useSelector } from "react-redux";

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
  dialogClose: {
    color: theme.palette.primary.dark,
  },
  dialogSave: {
    color: theme.palette.primary.light,
  },
}));

export default function EditLayerListDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const layersFromRedux = useSelector((state) => state.layers);

  const layerList = layersFromRedux.map((layer, index) => {
    return (
      <React.Fragment>
        <ListItem button key={layer.id} index={index} layer={layer}>
          <ListItemText primary={`Layer ${index}`} />
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
      </React.Fragment>
    );
  });

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
        {layerList.length !== 0 ? (
          <List
            component="nav"
            className={classes.listRoot}
            aria-label="mailbox folders"
          >
            <Divider />
            {layerList}
          </List>
        ) : (
          <Typography>
            No layer to edit. You can add a new layer by selecting ADD LAYER
            button on the panel next to the map.
          </Typography>
        )}
      </Box>

      <DialogActions>
        <Button autoFocus onClick={handleClose} className={classes.dialogClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
