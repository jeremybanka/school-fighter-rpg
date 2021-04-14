import Game from "../src/js/game.js";
import { Character } from "../src/js/characters";

describe("new Game()", () => {
  it("creates a new game session", () => {
    const expected = {
      idTicker: -1,
      turnOrder: [],
      characters: {},
      state: "",
      otherStates: ["explore", "battle", "loot", "wasted"],
    };
    expect(new Game()).toEqual(expected);
  });
});
describe("Game.prototype.addCharacter()", () => {
  it("adds a Character object to the Game object", () => {
    const game = new Game();
    const character = new Character();
    game.addCharacter(character);
    const expected = {
      health: 1,
      id: 0,
      name: `unnamedCharacter`,
      type: null,
      level: 1,
      xp: 0,
      inventory: [],
    };
    expect(game.characters[0]).toEqual(expected);
  });
});
