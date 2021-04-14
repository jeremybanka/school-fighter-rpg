const EXPLORE = "explore";
const BATTLE = "battle";
const LOOT = "loot";
const WASTED = "wasted";
export const STATE = {
  EXPLORE,
  BATTLE,
  LOOT,
  WASTED,
};

export default class Game {
  constructor() {
    this.idTicker = -1;
    this.turnOrder = [];
    this.characters = {};
    this.state = EXPLORE;
    this.otherStates = [BATTLE, LOOT, WASTED];
  }
  addCharacter(character) {
    this.idTicker += 1;
    const id = this.idTicker;
    character.id = id;
    this.characters[id] = character;
  }
  startBattle() {
    this.otherStates.push(this.state);
    this.state = this.otherStates.shift();
  }
}
