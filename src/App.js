import React, { Component } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidePanelOn: true
    };
  }

  render() {
    const mapWidth = this.state.sidePanelOn ? 10 : 12;
    const panelLength = this.state.sidePanelOn ? 2 : 0;
    return (
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container direction="row">
          {this.state.sidePanelOn && (
            <Grid item md={panelLength}>
              ewrfewsrtfwestfrwes
            </Grid>
          )}

          <Grid item md={mapWidth}>
            <div styles={{ left: "1000px" }}>
              <Map />
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
