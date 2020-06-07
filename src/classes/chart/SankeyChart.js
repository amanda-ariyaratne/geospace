import SankeyChartData from "../data/SankeyChartData";

export default class SankeyChart {
  constructor(data, headers, from, to, weight) {
    this.dataTable = new SankeyChartData(headers, from, to, weight);
    this.dataTable.setDataset(data);
    this.headers = headers;
  }
}
