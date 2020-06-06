import BarChartData from "../data/BarChartData";

export default class BarChart {
  constructor(data, headers, xAxis, yAxis) {
    this.dataTable = new BarChartData(headers, xAxis, yAxis);
    this.dataTable.setDataset(data);
    this.headers = headers;
    this.title = "";
    this.subtitle = "";
    this.isStacked = false;
    this.vAxis = {
      title: "",
      minValue: 0,
    };
    this.hAxis = {
      title: "",
    };
  }
}
