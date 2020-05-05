import React from "react";
import "./App.css";

import { Box } from "@material-ui/core";

import Header from "./components/Header";
import MapMain from "./components/MapMain";
import ChartMain from "./components/ChartMain";
import GraphMain from "./components/GraphMain";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <Box display="flex" flexDirection="column" className="app">
        <Box order={1}>
          <Header />
        </Box>
        <Switch>
          <Route path="/maps" exact component={MapMain} />
          <Route path="/charts" exact component={ChartMain} />
          <Route path="/maps" exact component={GraphMain} />
        </Switch>
      </Box>
    </Router>
  );
}
