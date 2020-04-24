// deck,gk
import { ScatterplotLayer } from "@deck.gl/layers";

// classes
import Layer from "./Layer";

export default class Scatterplot extends Layer {
  constructor(data) {
    super(data);
    this.radiusScale = 1;
    this.pickable = true;
    this.opacity = 0.5;
    this.radiusMinPixels = 2;
    this.getRadius = 1;
    this.getColor = [255, 0, 0];
    this.getPosition = null;
    this.getMetadata = {};
    this.name = "";
  }

  render() {
    return new ScatterplotLayer({
      id: this.id,
      data: this.data,
      radiusScale: this.radiusScale,
      pickable: this.pickable,
      opacity: this.opacity,
      radiusMinPixels: this.radiusMinPixels,
      getRadius: this.getRadius,
      getColor: this.getColor,
      getPosition: this.getPosition,
    });
  }

  validateRadiusScale() {
    if (isNaN(this.radiusScale)) {
      return false;
    }
    if (this.radiusScale === "") {
      return false;
    }
    if (typeof this.radiusScale === "string") {
      this.setRadiusScale(Number(this.radiusScale));
    }
    if (this.radiusScale === null) {
      return false;
    }
    if (typeof this.radiusScale === "object") {
      return false;
    }
    if (this.radiusScale < 0) {
      return false;
    }
    return true;
  }

  validateOpacity() {
    if (isNaN(this.opacity)) {
      return false;
    }
    if (this.opacity === "") {
      return false;
    }
    if (typeof this.opacity === "string") {
      this.setOpacity(Number(this.opacity));
    }
    if (this.opacity === null) {
      return false;
    }
    if (typeof this.opacity === "object") {
      return false;
    }
    if (this.opacity < 0 || this.opacity > 1) {
      return false;
    }
    return true;
  }

  validatePickable() {
    if (typeof this.pickable === "boolean") {
      return true;
    }
    return false;
  }

  setRadiusScale(rs) {
    this.radiusScale = rs;
  }

  setPickable(pickable) {
    this.pickable = pickable;
  }

  setOpacity(opacity) {
    this.opacity = opacity;
  }

  setPosition(latitude, longitude) {
    latitude = latitude.replace("Column ", "");
    longitude = longitude.replace("Column ", "");
    this.getPosition = new Function(
      "object",
      `return [object["${longitude}"], object["${latitude}"], 0]`
    );
  }
}
