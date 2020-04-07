import React, { Component, useState } from "react";
import Header from "./components/Header";

import "./App.css";
import { Grid, TextField, Box } from "@material-ui/core";
import Map from "./components/DeckglOverlay/Map";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

export default function App(props) {
  const { classes } = styles;
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container direction="row">
          <Grid item md={2}>
            <div></div>
          </Grid>
          <Grid item md={10}>
            <Paper>
              <Map />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
