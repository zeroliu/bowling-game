var Game = require('../game');

describe('Bowling Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('can roll', function() {
    game.roll(0);
  });

  it('plays a gutter game', function() {
    for (let i = 0; i < 20; ++i) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });
});

