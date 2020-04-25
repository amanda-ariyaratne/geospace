export default class Bearing {
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
    if (this.value < 0) {
      return false;
    }
    return true;
  }
}
