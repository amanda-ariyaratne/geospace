// deck,gk
import { PathLayer } from "@deck.gl/layers";

// classes
import Layer from "./Layer";
import RouteDataTable from "../data/RouteDataTable";
import { ThemeProvider } from "@material-ui/core";

export default class Route extends Layer {
  constructor(
    data,
    headers,
    startLatitudeHeaderIndex,
    startLongitudeHeaderIndex,
    endLatitudeHeaderIndex,
    endLongitudeHeaderIndex
  ) {
    super();

    this.dataTable = new RouteDataTable();
    this.dataTable.headers = headers;
    this.dataTable.startLatitudeHeaderIndex = startLatitudeHeaderIndex;
    this.dataTable.startLongitudeHeaderIndex = startLongitudeHeaderIndex;
    this.dataTable.endLatitudeHeaderIndex = endLatitudeHeaderIndex;
    this.dataTable.endLongitudeHeaderIndex = endLongitudeHeaderIndex;
    this.dataTable.setDataset(data);

    this.pickable = true;
    this.widthScale = 5;
    this.rounded = true;
    this.opacity = 1;

    this.name = "";
    this.showOnHover = [];
  }

  render() {
    return new PathLayer({
      id: this.id,
      data: this.dataTable.dataset,
      pickable: this.pickable,
      rounded: this.rounded,
      widthScale: this.widthScale,
      widthMinPixels: 2,
      opacity: this.opacity,
      getPath: (d) => d[d.length - 1],
      getColor: (d) => d[d.length - 2],
      getWidth: (d) => 1,
    });
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

  // setPosition(latitude, longitude) {
  //   latitude = latitude.replace("Column ", "");
  //   longitude = longitude.replace("Column ", "");
  //   this.getPosition = new Function(
  //     "object",
  //     `return [object["${longitude}"], object["${latitude}"], 0]`
  //   );
  // }
}
