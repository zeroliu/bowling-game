var Game = require('../game');

describe('Bowling Game', function() {
  let game;

  let rollMany = function(n, pins) {
    for (let i = 0; i < n; ++i) {
      game.roll(pins);
    }
  };

  let rollSpare = function() {
    game.roll(5);
    game.roll(5);
  };

  beforeEach(function() {
    game = new Game();
  });

  it('can roll', function() {
    game.roll(0);
  });

  it('handles a gutter game', function() {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('handles all ones', () => {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('handles one spare', () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toEqual(16);
  });
});

