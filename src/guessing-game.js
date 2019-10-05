class GuessingGame {
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
    guess() {
      this.expression = Math.ceil((this.min + this.max) / 2);
      return this.expression;
    }
    lower() {
      this.max = this.expression;
    }
    greater() {
      this.min = this.expression;
    }
}

module.exports = GuessingGame;
