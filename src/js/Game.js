export default class Game {
  constructor() {
    this.idTicker = -1;
    this.turnOrder = [];
    this.characters = {};
    this.state = "";
    this.otherStates = ["explore", "battle", "loot", "wasted"];
  }
  addCharacter(character) {
    this.idTicker += 1;
    const id = this.idTicker;
    character.id = id;
    this.characters[id] = character;
  }
}
