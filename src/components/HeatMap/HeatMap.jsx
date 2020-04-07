import React, { Component } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
import ControlPanel from "./ControlPanel";
import { json as requestJson } from "d3-request";
import { heatmapLayer } from "./MapStyle";

function filterFeaturesByDay(featureCollection, time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const features = featureCollection.features.filter((feature) => {
    const featureDate = new Date(feature.properties.time);
    return (
      featureDate.getFullYear === year &&
      featureDate.getMonth() === month &&
      featureDate.getDate() === day
    );
  });
  return { type: "FeatureCollection", features };
}

export default class HeatMap extends Component {
  constructor(props) {
    super(props);
    const current = new Date().getTime();

    this.state = {
      viewport: {
        latitude: 40,
        longitude: -100,
        zoom: 3,
        bearing: 0,
        pitch: 0,
      },
      allDay: true,
      startTime: current,
      endTime: current,
      selectedTime: current,
      earthquakes: null,
    };
  }

  componentDidMount() {
    requestJson(
      "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
      (error, response) => {
        if (!error) {
          const features = response.features;
          const endTime = features[0].properties.time;
          const startTime = features[features.length - 1].properties.time;

          this.setState({
            data: response,
            earthquakes: response,
            endTime,
            startTime,
            selectedTime: endTime,
          });
        }
      }
    );
  }

  onViewportChange = (viewport) => this.setState({ viewport });

  handleChangeDay = (time) => {
    this.setState({ selectedTime: time });
    if (this.state.earthquakes) {
      this.setState({
        data: filterFeaturesByDay(this.state.earthquakes, time),
      });
    }
  };

  handleChangeAllDay = (allDay) => {
    this.setState({ allDay });
    if (this.state.earthquakes) {
      this.setState({
        data: allDay
          ? this.state.earthquakes
          : filterFeaturesByDay(
              this.state.earthquakes,
              this.state.selectedTime
            ),
      });
    }
  };

  render() {
    const {
      viewport,
      data,
      allDay,
      selectedTime,
      startTime,
      endTime,
    } = this.state;

    return (
      <div style={{ height: "100vh", position: "relative" }}>
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this.onViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          {data && (
            <Source type="geojson" data={data}>
              <Layer {...heatmapLayer} />
            </Source>
          )}
        </MapGL>
        <ControlPanel
          containerComponent={this.props.containerComponent}
          startTime={startTime}
          endTime={endTime}
          selectedTime={selectedTime}
          allDay={allDay}
          onChangeDay={this.handleChangeDay}
          onChangeAllDay={this.handleChangeAllDay}
        />
      </div>
    );
  }
}
