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
import AddScatterplotLayerDialog from "../MapDialogs/AddScatterplotLayerDialog";
import AddArcLayerDialog from "../MapDialogs/AddArcLayerDialog";
import AddRouteLayerDialog from "../MapDialogs/AddRouteLayerDialog";
import AddHeatMapLayerDialog from "../MapDialogs/AddHeatMapLayerDialog";

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
  const [routeOpen, setRouteOpen] = useState(false);
  const [heatmapOpen, setHeatMapOpen] = useState(false);

  const handleScatterplotDialogOpen = () => {
    setScatterplotOpen(true);
  };

  const handleArcDialogOpen = () => {
    setArcOpen(true);
  };

  const handleRouteDialogOpen = () => {
    setRouteOpen(true);
  };

  const handleHeatMapDialogOpen = () => {
    setHeatMapOpen(true);
  };

  const handleScatterplotDialogClose = () => {
    setScatterplotOpen(false);
  };

  const handleArcDialogClose = () => {
    setArcOpen(false);
  };

  const handleRouteDialogClose = () => {
    setRouteOpen(false);
  };

  const handleHeatMapDialogClose = () => {
    setHeatMapOpen(false);
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
        <MenuItem onClick={handleRouteDialogOpen}>
          <ListItemIcon>
            <LaunchIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Route" />
        </MenuItem>
        <MenuItem onClick={handleHeatMapDialogOpen}>
          <ListItemIcon>
            <LaunchIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Heatmap" />
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

      <AddRouteLayerDialog
        open={routeOpen}
        onClose={handleRouteDialogClose}
        handleMenuClose={handleMenuClose}
      />

      <AddHeatMapLayerDialog
        open={heatmapOpen}
        onClose={handleHeatMapDialogClose}
        handleMenuClose={handleMenuClose}
      />
    </Box>
  );
}
