import shortid from "shortid";

export default class Layer {
  constructor() {
    this.id = shortid.generate();
  }

  render() {
    throw new Error("implement the render method");
  }

  getEditDialog() {
    throw new Error("implement get dialog method");
  }
}
