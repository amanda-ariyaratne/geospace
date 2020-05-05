export default class BarChartData {
  constructor(headers, xHeaderIndex, yHeaderIndices) {
    this.series = null;
    this.headers = headers;
    this.xHeaderIndex = xHeaderIndex;
    this.yHeaderIndices = yHeaderIndices;
    this.legendHeaders = [];
  }

  setDataset(jsonData) {
    const filtered = [];
    for (let i = 0; i < this.yHeaderIndices.length; ++i) {
      filtered.push([]);
    }

    try {
      console.log(jsonData);
      this.series = jsonData.reduce((filtered, row) => {
        for (let i = 0; i < this.yHeaderIndices.length; ++i) {
          const y = row[this.yHeaderIndices[i]];
          if (isNaN(y)) {
            console.log(row);
            throw new Error("Not a number");
          }
          filtered[i].push({
            x: row[this.xHeaderIndex],
            y: Number(y),
          });
        }
        return filtered;
      }, filtered);

      this.legendHeaders = this.yHeaderIndices.map((i) => {
        return this.headers[i];
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
