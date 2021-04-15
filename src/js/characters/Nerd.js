import Character from './Character'

export default class Nerd extends Character {
  constructor() {
    super()
    this.health = 10
    this.level = 3
    this.type = 'intelect'
    this.inventory = [];
  }
}