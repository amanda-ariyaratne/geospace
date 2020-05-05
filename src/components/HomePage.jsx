import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";

import Main from "./MapMain";

const useStyles = makeStyles((theme) => ({
  vizType: {
    margin: theme.spacing(5),
    padding: theme.spacing(5),
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" order={2} className="main">
      <Box display="flex" flexDirection="row" justifyContent="center" py={5}>
        <Typography variant="h3">Select Visualization Type</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-around">
        <Paper elevation={20} className={classes.vizType}>
          Maps
        </Paper>

        <Paper elevation={20} className={classes.vizType}>
          Chart
        </Paper>
        <Paper elevation={20} className={classes.vizType}>
          Graph
        </Paper>
      </Box>
    </Box>
  );
}
