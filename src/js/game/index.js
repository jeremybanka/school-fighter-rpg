import diceRoll from "./util"

const EXPLORE = `explore`
const BATTLE = `battle`
const LOOT = `loot`
const WASTED = `wasted`
export const STATE = {
  EXPLORE,
  BATTLE,
  LOOT,
  WASTED,
}
const BONUS = `bonus`
const PROGRESS = `progress`
const ENCOUNTER = `encounter`
export const EXPLORE_OUTCOMES = {
  BONUS,
  PROGRESS,
  ENCOUNTER,
}

export default class Game {
  constructor() {
    this.idTicker = -1
    this.turnOrder = []
    this.characters = new Map()
    this.state = EXPLORE
    this.otherStates = [BATTLE, LOOT, WASTED]
  }

  addCharacter(character) {
    this.idTicker += 1
    const id = this.idTicker
    this.characters.set(id, character)
  }

  startBattle() {
    this.otherStates.push(this.state)
    this.state = this.otherStates.shift()
  }

  exploreRoad() {
    const diceRollNum = diceRoll(6)
    if (diceRollNum === 6) {
      return BONUS
    } else if (diceRollNum === 1) {
      this.startBattle()
      return ENCOUNTER
    }
    return PROGRESS
  }
}
