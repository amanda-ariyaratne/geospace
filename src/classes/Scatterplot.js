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
}
