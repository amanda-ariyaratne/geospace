export default class Pitch {
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
    if (this.value < 0 || this.value > 60) {
      return false;
    }
    return true;
  }
}
