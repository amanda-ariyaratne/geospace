export default class Zoom {
  constructor(value) {
    this.value = value;
  }

  isValid() {
    return this.validate();
  }

  validate() {
    if (isNaN(this.value)) {
      return false;
    }
    if (this.value < 0 || this.value > 20) {
      return false;
    }
    return true;
  }
}
