class Game {
  constructor() {
    this.score_ = 0;
  }

  roll(pins) {
    this.score_ += pins;
  }

  score() {
    return this.score_;
  }
}

module.exports = Game;

