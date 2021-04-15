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
    character.id = id
    this.characters.set(id, character)
  }

  startBattle() {
    this.otherStates.push(this.state)
    this.state = this.otherStates.shift()
    const characterIds = Array.from(this.characters.keys())[(0, 1, 2, 3, 4)]
    characterIds.sort((idA, idB) => {
      const characterA = this.characters.get(idA)
      const characterB = this.characters.get(idB)
      const characterAPriority = characterA.level + diceRoll(3)
      const characterBPriority = characterB.level + diceRoll(3)
      return characterAPriority - characterBPriority
    })
    this.turnOrder = characterIds
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
