class PocClass {
  get(value) {
    return "fn1: " + value;
  }

  get(value, value2) {
    return "fn2: " + value + " " + value2;
  }
}
module.exports = PocClass;
