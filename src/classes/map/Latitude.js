export default class Latitude {
  constructor(value) {
    this.value = value;
  }

  isValid() {
    return this.validate();
  }

  validate() {
    if (this.value === null || isNaN(this.value) === true) {
      return false;
    }

    return isFinite(this.value) && Math.abs(this.value) <= 90;
  }
}
