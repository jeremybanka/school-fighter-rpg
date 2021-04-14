export default class Game {
  constructor() {
    this.turnOrder = [];
    this.characters = {};
    this.state = "";
    this.otherStates = ["explore", "battle", "loot", "wasted"];
  }
  addCharacter() {
    this.characters = "foo";
  }
}
