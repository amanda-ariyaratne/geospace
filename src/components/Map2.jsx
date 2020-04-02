import React, { Component } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "../App.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlLWtpbGxqb3kiLCJhIjoiY2s3NGw5NzZuMDF3NzNlcnFuNGtmNzhhcCJ9.qR33oHioeCMuGFxtz1Qt0g";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style:
        "https://openmaptiles.github.io/osm-bright-gl-style/style-cdn.json",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default Map;
