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
      // produce the basic dataset
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

      // sum up similar keys
      this.sumDataByKey();

      this.legendHeaders = this.yHeaderIndices.map((i) => {
        return this.headers[i];
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  sumDataByKey() {
    for (let i = 0; i < this.series.length; ++i) {
      this.series[i] = this.series[i].reduce((summed, row) => {
        const o = summed
          .filter(function (obj) {
            return obj.x == row.x;
          })
          .pop() || { x: row.x, y: 0 };

        o.y += row.y;
        summed.push(o);
        return summed;
      }, []);
    }
  }
}
