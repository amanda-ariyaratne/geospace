import React, { Component, useState } from "react";
import Header from "./components/Header";

import "./App.css";
import { Grid, TextField, Box } from "@material-ui/core";
import Map from "./components/MapWrapper/Map";
import ClustersClass from "./components/ClusterMap/ClustersClass";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container direction="row">
        <Grid item md={2}>
          <div></div>
        </Grid>
        <Grid item md={10}>
          <ClustersClass />
        </Grid>
      </Grid>
    </Grid>
  );
}
