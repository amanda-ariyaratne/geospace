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
import AddScatterplotLayerDialog from "./AddScatterplotLayerDialog";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function AddLayerMenu(props) {
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
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
        <MenuItem onClick={handleDialogOpen}>
          <ListItemIcon>
            <LaunchIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Scatterplot" />
        </MenuItem>
      </StyledMenu>

      <AddScatterplotLayerDialog
        open={open}
        onClose={handleDialogClose}
        handleMenuClose={handleMenuClose}
      />
    </Box>
  );
}
