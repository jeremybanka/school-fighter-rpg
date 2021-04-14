import Game from "../src/js/game.js";

describe("new Game()", () => {
  it("creates a new game session", () => {
    const expected = {
      turnOrder: [],
      characters: {},
      state: "",
      otherStates: ["explore", "battle", "loot", "wasted"],
    };
    expect(new Game()).toEqual(expected);
  });
});
describe("Game.prototype.addCharacter()", () => {
  const game = new Game();
  game.addCharacter("EMOji");
  const expected = {
    0: {
      health: 1,
      name: `EMOji`,
      type: null,
      level: 1,
      xp: 0,
      inventory: [],
    },
  };
  expect(game.characters).toEqual(expected);
});
