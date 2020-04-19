import shortid from "shortid";

export default class Layer {
  constructor(data) {
    this.id = shortid.generate();
    this.data = data;
  }
}
