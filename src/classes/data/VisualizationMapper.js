export default class VisualizationMapper {
  constructor(headers) {
    this.headers = headers;
  }

  map() {
    const scatterplotmap = this.containsLatLongPair();
    const heatmap = this.containsLatLongPair();
    const routemap = this.containsTwoLatLongPair();

    const barchart = this.containsStringAndNumber();
    const linechart = this.containsSuitableAxis();
    const sankeychart = this.containsTwoStrings();

    return {
      scatterplotmap,
      heatmap,
      routemap,
      barchart,
      linechart,
      sankeychart,
    };
  }

  containsLatLongPair() {
    let longitude = false;
    let latitude = false;
    for (let i = 0; i < this.headers.length; ++i) {
      if (this.headers[i].selected === "longitude") {
        longitude = true;
      }
      if (this.headers[i].selected === "latitude") {
        latitude = true;
      }
    }
    return longitude && latitude;
  }

  containsTwoLatLongPair() {
    let longitude = 0;
    let latitude = 0;
    for (let i = 0; i < this.headers.length; ++i) {
      if (this.headers[i].selected === "longitude") {
        longitude++;
      } else if (this.headers[i].selected === "latitude") {
        latitude++;
      }
    }

    return longitude > 1 && latitude > 1;
  }

  containsSuitableAxis() {
    let string = 0;
    let number = 0;
    for (let i = 0; i < this.headers.length; ++i) {
      if (this.headers[i].selected == "string") {
        string++;
      } else if (this.headers[i].selected == "number") {
        number++;
      }
    }
    return (string > 0 && number > 0) || number > 1;
  }

  containsTwoStrings() {
    let string = 0;
    for (let i = 0; i < this.headers.length; ++i) {
      if (this.headers[i].selected == "string") {
        string++;
      }
    }
    return string > 1;
  }

  containsStringAndNumber() {
    let string = 0;
    let number = 0;
    for (let i = 0; i < this.headers.length; ++i) {
      if (this.headers[i].selected == "string") {
        string++;
      } else if (this.headers[i].selected == "number") {
        number++;
      }
    }
    return string > 0 && number > 0;
  }
}
