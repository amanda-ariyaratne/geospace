export default class ArcDataTable {
  constructor() {
    this.dataset = [];
    this.headers = [];
    this.startLatitudeHeaderIndex = null;
    this.startLongitudeHeaderIndex = null;
    this.endLatitudeHeaderIndex = null;
    this.endLongitudeHeaderIndex = null;
    this.headerNames = [];
  }

  setDataset(jsonData) {
    const passed = this.testBeforeProcessing();

    if (passed) {
      this.dataset = jsonData.reduce((filteredData, object) => {
        let startLongitude = object[this.startLongitudeHeaderIndex];
        let startLatitude = object[this.startLatitudeHeaderIndex];
        let endLongitude = object[this.endLongitudeHeaderIndex];
        let endLatitude = object[this.endLatitudeHeaderIndex];

        startLongitude = Number(startLongitude);
        startLatitude = Number(startLatitude);
        endLongitude = Number(endLongitude);
        endLatitude = Number(endLatitude);

        // bring longitude and latitude to positions 0  and 1
        const sortedObject = [
          startLongitude,
          startLatitude,
          endLongitude,
          endLatitude,
        ];
        for (let i = 0; i < object.length; ++i) {
          if (
            i !== this.startLongitudeHeaderIndex &&
            i !== this.startLatitudeHeaderIndex &&
            i !== this.endLongitudeHeaderIndex &&
            i !== this.endLatitudeHeaderIndex
          ) {
            sortedObject.push(object[i]);
          }
        }

        filteredData.push(sortedObject);
        return filteredData;
      }, []);

      // set latitude and longitude header keys to 1 and 0
      const sortedHeader = [
        this.headers[this.startLongitudeHeaderIndex],
        this.headers[this.startLatitudeHeaderIndex],
        this.headers[this.endLongitudeHeaderIndex],
        this.headers[this.endLatitudeHeaderIndex],
      ];
      for (let i = 0; i < this.headers.length; ++i) {
        if (
          i !== this.startLongitudeHeaderIndex &&
          i !== this.startLatitudeHeaderIndex &&
          i !== this.endLongitudeHeaderIndex &&
          i !== this.endLatitudeHeaderIndex
        ) {
          sortedHeader.push(this.headers[i]);
        }
      }
      for (let i = 0; i < this.headers.length; ++i) {
        sortedHeader[i].index = i;
        this.headerNames.push(sortedHeader[i].name);
      }
      this.headers = sortedHeader;
      this.startLongitudeHeaderIndex = 0;
      this.startLatitudeHeaderIndex = 1;
      this.endLongitudeHeaderIndex = 2;
      this.endLatitudeHeaderIndex = 3;
    }
  }

  testBeforeProcessing() {
    if (
      this.headers === [] ||
      this.startLongitudeHeaderIndex === null ||
      this.startLatitudeHeaderIndex === null ||
      this.endLongitudeHeaderIndex === null ||
      this.endLatitudeHeaderIndex === null
    ) {
      return false;
    }

    if (!Array.isArray(this.headers) || this.headers.length < 4) {
      return false;
    }

    if (
      isNaN(this.startLongitudeHeaderIndex) ||
      isNaN(this.startLatitudeHeaderIndex) ||
      isNaN(this.endLongitudeHeaderIndex) ||
      isNaN(this.endLatitudeHeaderIndex)
    ) {
      return false;
    }

    if (
      this.startLongitudeHeaderIndex === "" ||
      this.startLatitudeHeaderIndex === "" ||
      this.endLongitudeHeaderIndex === "" ||
      this.endLatitudeHeaderIndex === ""
    ) {
      return false;
    }

    if (
      this.startLongitudeHeaderIndex >= this.headers.length ||
      this.startLatitudeHeaderIndex >= this.headers.length ||
      this.endLongitudeHeaderIndex >= this.headers.length ||
      this.endLatitudeHeaderIndex >= this.headers.length
    ) {
      return false;
    }

    this.startLongitudeHeaderIndex = Number(this.startLongitudeHeaderIndex);
    this.startLatitudeHeaderIndex = Number(this.startLatitudeHeaderIndex);
    this.endLongitudeHeaderIndex = Number(this.endLongitudeHeaderIndex);
    this.endLatitudeHeaderIndex = Number(this.endLatitudeHeaderIndex);

    return true;
  }

  isValidLongitude(longitude) {
    if (longitude === null || longitude === "" || isNaN(longitude) === true) {
      return false;
    }

    return isFinite(longitude) && Math.abs(longitude) <= 180;
  }

  isValidLatitude(latitude) {
    if (latitude === null || latitude === "" || isNaN(latitude) === true) {
      return false;
    }
    return isFinite(latitude) && Math.abs(latitude) <= 90;
  }

  getSourcePosition() {
    return (object) => [object[0], object[1]];
  }

  getTargetPosition() {
    return (object) => [object[2], object[3]];
  }
}
