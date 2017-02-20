class Game {
  constructor() {
    this.rolls_ = [];
    this.currentRoll = 0;
  }

  roll(pins) {
    this.rolls_[this.currentRoll++] = pins;
  }

  score() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; ++frame) {
      if (this.isStrike_(frameIndex)) {
        score += 10 + this.rolls_[frameIndex + 1] + this.rolls_[frameIndex + 2];
        frameIndex++;
      } else if (this.isSpare_(frameIndex)) {
        score += 10 + this.rolls_[frameIndex + 2];
        frameIndex += 2;
      } else {
        score += this.rolls_[frameIndex] + this.rolls_[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return score;
  }

  isSpare_(frameIndex) {
    return this.rolls_[frameIndex] + this.rolls_[frameIndex + 1] === 10;
  }

  isStrike_(frameIndex) {
    return this.rolls_[frameIndex] === 10;
  }
}

module.exports = Game;

