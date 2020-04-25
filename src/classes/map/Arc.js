// deck,gk
import { ArcLayer } from "@deck.gl/layers";

// classes
import Layer from "./Layer";
import ArcDataTable from "../data/ArcDataTable";
import { ThemeProvider } from "@material-ui/core";

export default class Arc extends Layer {
  constructor(
    data,
    headers,
    startLatitudeHeaderIndex,
    startLongitudeHeaderIndex,
    endLatitudeHeaderIndex,
    endLongitudeHeaderIndex
  ) {
    super();

    this.dataTable = new ArcDataTable();
    this.dataTable.headers = headers;
    this.dataTable.startLatitudeHeaderIndex = startLatitudeHeaderIndex;
    this.dataTable.startLongitudeHeaderIndex = startLongitudeHeaderIndex;
    this.dataTable.endLatitudeHeaderIndex = endLatitudeHeaderIndex;
    this.dataTable.endLongitudeHeaderIndex = endLongitudeHeaderIndex;
    this.dataTable.setDataset(data);

    this.pickable = true;
    this.getWidth = 12;
    this.getSourcePosition = null;
    this.getTargetPosition = null;
    this.getMetadata = {};
    this.name = "";
    this.showOnHover = [];
  }

  render() {
    return new ArcLayer({
      id: this.id,
      data: this.dataTable.dataset,
      pickable: this.pickable,
      getWidth: this.getWidth,
      getSourcePosition: this.dataTable.getSourcePosition(),
      getTargetPosition: this.dataTable.getTargetPosition(),
      getSourceColor: (d) => [0, 255, 0],
      getTargetColor: (d) => [0, 0, 255],
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
