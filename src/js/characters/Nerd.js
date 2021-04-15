import Character from './Character'

export default class Nerd extends Character {
  constructor() {
    super()
    this.health = 10
    this.level = 3
    this.type = 'intelect'
    this.inventory = [];
  }

  hackEmailOfCharacter(char) {
    super.dealDamageToCharacter(char, 40)
  }
  solveMathProblem(char) {
    super.dealDamageToCharacter(char, 5)
  }
  passTest() {
    super.addXP(30)
    super.levelUpOne()
  }
}
