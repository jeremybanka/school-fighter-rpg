import Game from "../src/js/Game.js";

describe("", () => {
  it("creates a new game session", () => {
    const expected = {
      turnOrder: [],
      beings: {},
      state: "",
      otherStates: ["explore", "battle", "loot", "wasted"],
    };
    expect(new Game()).toEqual(expected);
  });
});
