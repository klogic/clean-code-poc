class PocClass {
  /**
   * This class for POC
   * can we declare same function name in class, but different argument received?.
   */

  get(value) {
    return "fn1: " + value;
  }

  get(value, value2) {
    return "fn2: " + value + " " + value2;
  }
}
module.exports = PocClass;
