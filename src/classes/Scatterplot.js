import { ScatterplotLayer } from "@deck.gl/layers";
import Layer from "./Layer";

export default class Scatterplot extends Layer {
  constructor({
    id,
    data,
    radiusScale,
    pickable,
    opacity,
    radiusMinPixels,
    getRadius,
    getColor,
  }) {
    super({ id, data });
    this.radiusScale = radiusScale;
    this.pickable = pickable;
    this.opacity = opacity;
    this.radiusMinPixels = radiusMinPixels;
    this.getRadius = getRadius;
    this.getColor = getColor;
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
      getPosition: (d) => [d[0], d[1], 0],
    });
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
}
