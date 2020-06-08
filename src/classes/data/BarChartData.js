export default class BarChartData {
  constructor(headers, xHeaderIndex, yHeaderIndices) {
    this.series = null;
    this.headers = headers;
    this.xHeaderIndex = xHeaderIndex;
    this.yHeaderIndices = yHeaderIndices;
    this.legendHeaders = [];
  }

  setDataset(jsonData) {
    try {
      // produce the basic dataset
      const filtered = [[this.headers[this.xHeaderIndex].name]];
      for (let i = 0; i < this.yHeaderIndices.length; ++i) {
        filtered[0].push(this.headers[this.yHeaderIndices[i]].name);
      }
      this.series = jsonData.reduce((filtered, row) => {
        const el = [];
        const x = row[this.xHeaderIndex].toString();
        el.push(x);
        for (let i = 0; i < this.yHeaderIndices.length; ++i) {
          const y = Number(row[this.yHeaderIndices[i]]);
          el.push(y);
        }
        filtered.push(el);
        return filtered;
      }, filtered);

      // sum up similar keys
      // this.sumDataByKey();

      // this.legendHeaders = this.yHeaderIndices.map((i) => {
      //   return this.headers[i].name;
      // });
    } catch (err) {
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
