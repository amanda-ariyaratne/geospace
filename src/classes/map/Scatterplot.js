// deck.gk
import { ScatterplotLayer } from "@deck.gl/layers";

// classes
import Layer from "./Layer";
import ScatterplotDataTable from "../data/ScatterplotDataTable";

export default class Scatterplot extends Layer {
  constructor(data, headers, latitudeHeaderIndex, longitudeHeaderIndex) {
    super();

    this.dataTable = new ScatterplotDataTable();
    this.dataTable.headers = headers;
    this.dataTable.latitudeHeaderIndex = latitudeHeaderIndex;
    this.dataTable.longitudeHeaderIndex = longitudeHeaderIndex;
    this.dataTable.setDataset(data);

    this.radiusScale = 1;
    this.pickable = true;
    this.opacity = 0.5;
    this.radiusMinPixels = 2;
    this.getRadius = 1;
    this.getColor = [255, 0, 0];
    this.getPosition = null;
    this.getMetadata = {};
    this.name = "";
    this.showOnHover = [];
  }

  render() {
    return new ScatterplotLayer({
      id: this.id,
      data: this.dataTable.dataset,
      radiusScale: this.radiusScale,
      pickable: this.pickable,
      opacity: this.opacity,
      radiusMinPixels: this.radiusMinPixels,
      getRadius: this.getRadius,
      getColor: this.getColor,
      getPosition: this.dataTable.getObjectPosition(),
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

  // addShowOnHover(index) {
  //   this.showOnHover.add(index);
  // }

  // removeShowOnHover(index) {
  //   this.showOnHover.delete(index);
  // }

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
