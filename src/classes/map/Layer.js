import shortid from "shortid";

export default class Layer {
  constructor(data) {
    this.id = shortid.generate();
    this.data = data;
  }

  render() {
    throw new Error("implement the render method");
  }

  getEditDialog() {
    throw new Error("implement get dialog method");
  }
}
