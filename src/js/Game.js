export default class Game {
  constructor() {
    this.turnOrder = [];
    this.beings = {};
    this.state = "";
    this.otherStates = ["explore", "battle", "loot", "wasted"];
  }
}
