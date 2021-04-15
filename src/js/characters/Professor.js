import Character from "./Character";

export default class Professor extends Character {
  constructor() {
    super();
    this.health = 20;
    this.level = 2;
    this.type = "knows everything"
  }
}
