export default class SankeyDiagramData {
  constructor(headers, from, to, weight) {
    this.headers = headers;
    this.from = from;
    this.to = to;
    this.weight = weight;
    this.data = [];
  }

  setDataset(jsonData) {
    try {
      if (this.weight === "") {
        this.data = jsonData.reduce((filtered, row) => {
          filtered.push([row[this.from], row[this.to], 1]);
          return filtered;
        }, []);
      } else {
        this.data = jsonData.reduce((filtered, row) => {
          filtered.push([
            row[this.from],
            row[this.to],
            Number(row[this.weight]),
          ]);
          return filtered;
        }, []);
      }

      this.data = this.data.sort();

      // sum up similar keys
      this.sumData();

      // add column headers
      this.data.unshift(["From", "To", "Weight"]);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  sumData() {
    const summed = [];
    summed.push(this.data.shift());
    let summedLength = 1;
    let i = 1;

    while (this.data.length != 0) {
      const itemToInsert = this.data.shift();

      if (
        itemToInsert[0] === summed[summedLength - 1][0] &&
        itemToInsert[1] === summed[summedLength - 1][1]
      ) {
        summed[summedLength - 1][2] += 1;
      } else {
        summed.push(itemToInsert);
        summedLength += 1;
      }
    }
    this.data = summed;
  }
}
