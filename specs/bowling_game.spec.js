var Game = require('../game');

describe('Bowling Game', function() {
  let game;

  let rollMany = function(n, pins) {
    for (let i = 0; i < n; ++i) {
      game.roll(pins);
    }
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
});

