import Character from './Character'

export default class Emo extends Character {
  constructor() {
    super()
    this.health = 5
    this.level = 1
    this.type = 'dark'
    //this.inventory = [] --they should get extra inventory something
  }
}