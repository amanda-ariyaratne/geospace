import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

// react router
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    margin: theme.spacing(2, 1),
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));

export default function ViewVisualizationListButton(props) {
  const classes = useStyles();

  return (
    <Box className={classes.boxStyle}>
      <Link to="/vis-list" className={classes.link}>
        <Button variant="outlined" color="secondary" fullWidth>
          View Visualization List
        </Button>
      </Link>
    </Box>
  );
}
