import LineChartData from "../data/LineChartData";

export default class LineChart {
  constructor(data, headers, xAxis, yAxis) {
    this.dataTable = new LineChartData(headers, xAxis, yAxis);
    this.dataTable.setDataset(data);
    this.headers = headers;
    this.title = "";
    this.curveType = "none";
    this.vAxis = {
      title: "",
    };
    this.hAxis = {
      title: "",
    };
  }
}
