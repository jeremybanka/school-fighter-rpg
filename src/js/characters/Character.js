export default class Character {
  constructor() {
    this.health = 1;
    this.name = `unnamedCharacter`;
    this.type = null;
    this.level = 1;
    this.xp = 0;
    this.inventory = [];
  }
  addHealth() {
    this.health += 5;
  }
  removeHealth() {
    this.health -= 5;
    if (this.health <= 0) {
      this.health = `Game Over!`;
    }
  }
  addXP(num) {
    this.xp += num;
  }
  levelUpOne() {
    if (this.xp % 30 === 0) {
      this.level += 1;
    } else {
      this.level = this.level;
    }
  }
  dealDamageToCharacter(character, damage) {
    character.health -= damage;
  }
  addTypeToCharacter(thing) {
    this.type = thing;
  } 
}

// 10 % 30 will return .333
// 20 % 30 will return .6666
// 30 %30  will return 0 //level up
// 60 % 30 will return 0 //level up
// 70 % 30 will return 10
// 70 / 30 will return 2.333344555
