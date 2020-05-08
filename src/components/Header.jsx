import React from "react";

// components
import Logo from "./Logo";

// material-ui
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  vizContainer: {
    paddingRight: theme.spacing(10),
  },
  vizBtn: {
    padding: theme.spacing(2, 5),
    margin: theme.spacing(0, 2),
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));

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
      horizontal: "left",
    }}
    {...props}
  />
));

const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Logo />

          <Box
            display="flex"
            flexDirection="row"
            className={classes.vizContainer}
          >
            <Link to="/maps" className={classes.link} onClick={handleMenuClose}>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.vizBtn}
              >
                Maps
              </Button>
            </Link>

            <Button
              color="inherit"
              variant="outlined"
              className={classes.vizBtn}
              onClick={handleMenuOpen}
            >
              Charts
            </Button>

            <Link to="/graphs" className={classes.link}>
              <Button
                color="inherit"
                variant="outlined"
                className={classes.vizBtn}
              >
                Graphs
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <Link to="/charts" className={classes.link} onClick={handleMenuClose}>
          <MenuItem>
            <ListItemIcon>
              <LaunchIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Vertical Bar" />
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LaunchIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Sankey Diagram" />
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
};

export default Header;
