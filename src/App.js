import React, { Component, useState } from "react";
import Header from "./components/Header";

import "./App.css";
import { Grid, TextField, Box } from "@material-ui/core";
import Map from "./components/DeckglOverlay/Map";

export default function App(props) {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container direction="row">
          <Grid item md={2}>
            <div></div>
          </Grid>
          <Grid item md={10}>
            <Map />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
