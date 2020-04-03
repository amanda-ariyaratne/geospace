import React, { Component, useState } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import LeftDrawer from "./components/LeftDrawer";
import Clusters from "./components/ClusterMap/Clusters";
import ClustersClass from "./components/ClusterMap/ClustersClass";
import "./App.css";
import { Grid, TextField } from "@material-ui/core";

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
        <Grid item md={12} lg={2}>
          <TextField id="standard-basic" label="Standard" />
        </Grid>
        <Grid item md={12} lg={2}>
          <ClustersClass />
        </Grid>
      </Grid>
    </Grid>
  );
}
