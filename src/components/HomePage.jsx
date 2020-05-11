import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
    height: "100%",
    position: "relative",
  },
}));

const bg = "bg.jpeg";

export default function HomePage() {
  const classes = useStyles();
  return (
    <Box
      className={classes.bg}
      flexGrow={1}
      order={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1">Ascent</Typography>
      <Typography variant="h3">
        A platform to visualize your transportation datasets instantly
      </Typography>
      <Typography variant="h4" style={{ paddingTop: 50 }}>
        Please select a type from the menu to get started
      </Typography>
    </Box>
  );
}
