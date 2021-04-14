export default class Character {
  constructor() {
    this.health = 1
    this.name = `unnamedCharacter`
    this.type = null
    this.level = 1
    this.xp = 0
    this.inventory = []
  }
  addHealth() {
    this.health += 5
  }
  removeHealth() {
    this.health -= 5
    if (this.health <= 0) {
      this.health = `Game Over!`
    }
  }
}
