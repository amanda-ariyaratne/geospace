import React, { useState } from "react";

// components
import DataTableDialog from "./DataTableDialog";

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
import LaunchIcon from "@material-ui/icons/Launch";

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

export default function DataTableListDialog(props) {
  const classes = useModelStyles();
  const { onClose, open } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const layersFromRedux = useSelector((state) => state.layers);
  const [viewTable, setViewTable] = useState(null);
  const [viewIndex, setViewIndex] = useState(null);
  const [dataTableDialogOpen, setDataTableDialogOpen] = useState(false);

  const handleViewClick = (layer, index) => {
    switch (layer.constructor.name) {
      case "Scatterplot":
        setViewTable(layer);
        setViewIndex(index);
        setDataTableDialogOpen(true);
        break;
      default:
        return;
    }
  };

  const dataTableList = layersFromRedux.map((layer, index) => {
    return (
      <React.Fragment key={layer.id}>
        <ListItem button key={layer.id} index={index} layer={layer}>
          <ListItemText
            primary={layer.name !== "" ? layer.name : `Layer ${index}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <Tooltip title="View" placement="right-start">
                <LaunchIcon
                  onClick={() => {
                    handleViewClick(layer, index);
                  }}
                />
              </Tooltip>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  });

  const handleDataTableDialogClose = () => {
    setDataTableDialogOpen(false);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <React.Fragment>
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
        <DialogTitle>Select a Data Table</DialogTitle>

        <Box className={classes.box}>
          {dataTableList.length !== 0 ? (
            <List
              component="nav"
              className={classes.listRoot}
              aria-label="mailbox folders"
            >
              <Divider />
              {dataTableList}
            </List>
          ) : (
            <Typography>
              No data table to view. You can add a new layer by selecting ADD
              LAYER button on the panel next to the map.
            </Typography>
          )}
        </Box>

        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className={classes.dialogClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {dataTableDialogOpen ? (
        <DataTableDialog
          onClose={handleDataTableDialogClose}
          open={dataTableDialogOpen}
          table={viewTable}
          index={viewIndex}
        />
      ) : null}
    </React.Fragment>
  );
}
