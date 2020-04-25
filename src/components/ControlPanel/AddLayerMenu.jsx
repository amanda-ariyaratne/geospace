import React, { useState } from "react";

// material-ui
import { withStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Menu,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";

// components
import AddScatterplotLayerDialog from "../Dialogs/AddScatterplotLayerDialog";
import AddArcLayerDialog from "../Dialogs/AddArcLayerDialog";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "center",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
));

export default function AddLayerMenu(props) {
  const [scatterplotOpen, setScatterplotOpen] = useState(false);
  const [arcOpen, setArcOpen] = useState(false);

  const handleScatterplotDialogOpen = () => {
    setScatterplotOpen(true);
  };

  const handleArcDialogOpen = () => {
    setArcOpen(true);
  };

  const handleScatterplotDialogClose = () => {
    setScatterplotOpen(false);
  };

  const handleArcDialogClose = () => {
    setArcOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={props.boxStyle}>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={handleMenuOpen}
      >
        Add Layer
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleScatterplotDialogOpen}>
          <ListItemIcon>
            <LaunchIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Scatterplot" />
        </MenuItem>
        <MenuItem onClick={handleArcDialogOpen}>
          <ListItemIcon>
            <LaunchIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Arc" />
        </MenuItem>
      </StyledMenu>

      <AddScatterplotLayerDialog
        open={scatterplotOpen}
        onClose={handleScatterplotDialogClose}
        handleMenuClose={handleMenuClose}
      />

      <AddArcLayerDialog
        open={arcOpen}
        onClose={handleArcDialogClose}
        handleMenuClose={handleMenuClose}
      />
    </Box>
  );
}
