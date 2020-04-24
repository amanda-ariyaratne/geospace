export default class ScatterplotDataTable {
  constructor() {
    this.dataset = [];
    this.headers = [];
    this.latitudeHeaderIndex = null;
    this.longitudeHeaderIndex = null;
  }

  setDataset(jsonData) {
    const passed = this.testBeforeProcessing();

    if (passed) {
      this.dataset = jsonData.reduce((filteredData, object) => {
        let longitude = object[this.longitudeHeaderIndex];
        let latitude = object[this.latitudeHeaderIndex];

        // skip if latitude or longitude are not valid
        if (isNaN(longitude) || isNaN(latitude)) {
          return filteredData;
        } else if (
          !this.isValidLongitude(longitude) ||
          !this.isValidLatitude(latitude)
        ) {
          return filteredData;
        }

        longitude = Number(longitude);
        latitude = Number(latitude);

        // bring longitude and latitude to positions 0  and 1
        const sortedObject = [longitude, latitude];
        for (let i = 0; i < object.length; ++i) {
          if (
            i !== this.longitudeHeaderIndex &&
            i !== this.latitudeHeaderIndex
          ) {
            sortedObject.push(object[i]);
          }
        }

        filteredData.push(sortedObject);
        return filteredData;
      }, []);

      // set latitude and longitude header keys to 1 and 0
      const sortedHeader = [
        this.headers[this.longitudeHeaderIndex],
        this.headers[this.latitudeHeaderIndex],
      ];
      for (let i = 0; i < this.headers.length; ++i) {
        if (i !== this.longitudeHeaderIndex && i !== this.latitudeHeaderIndex) {
          sortedHeader.push(this.headers[i]);
        }
      }
      this.headers = sortedHeader;
      this.longitudeHeaderIndex = 0;
      this.latitudeHeaderIndex = 1;
    }
  }

  testBeforeProcessing() {
    if (
      this.headers === [] ||
      this.latitudeHeaderIndex === null ||
      this.longitudeHeaderIndex === null
    ) {
      return false;
    }

    if (!Array.isArray(this.headers) || this.headers.length < 2) {
      return false;
    }

    if (isNaN(this.longitudeHeaderIndex) || isNaN(this.latitudeHeaderIndex)) {
      return false;
    }

    if (this.longitudeHeaderIndex === "" || this.latitudeHeaderIndex === "") {
      return false;
    }

    if (
      this.longitudeHeaderIndex >= this.headers.length ||
      this.latitudeHeaderIndex >= this.headers.length
    ) {
      return false;
    }

    this.longitudeHeaderIndex = Number(this.longitudeHeaderIndex);
    this.latitudeHeaderIndex = Number(this.latitudeHeaderIndex);

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
}
