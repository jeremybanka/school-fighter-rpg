import Game, { STATE, EXPLORE_OUTCOMES } from "../src/js/game"
import diceRoll from "../src/js/game/util"
import { Character, Wizard } from "../src/js/characters"

const { EXPLORE, BATTLE, LOOT, WASTED } = STATE
const { BONUS, PROGRESS, ENCOUNTER } = EXPLORE_OUTCOMES

describe(`new Game()`, () => {
  it(`creates a new game session`, () => {
    const expected = {
      idTicker: -1,
      turnOrder: [],
      characters: new Map(),
      state: EXPLORE,
      otherStates: [BATTLE, LOOT, WASTED],
    }
    expect(new Game()).toEqual(expected)
  })
})
describe(`Game.prototype.addCharacter()`, () => {
  it(`adds a Character object to the Game characters map`, () => {
    const game = new Game()
    const character = new Character()
    game.addCharacter(character)
    const expected = {
      health: 1,
      id: 0,
      name: `unnamedCharacter`,
      type: null,
      level: 1,
      xp: 0,
      inventory: [],
    }
    console.log(game.characters)
    expect(game.characters.get(0)).toEqual(expected)
  })
})
describe(`Game.prototype.startBattle()`, () => {
  it(`sets game state to BATTLE`, () => {
    const game = new Game()
    const character = new Character()
    game.addCharacter(character)
    game.startBattle()
    expect(game.state).toEqual(BATTLE)
  })
  it(`produces an array of character ids in semirandom order`, () => {
    const game = new Game()
    game.addCharacter(new Character())
    game.addCharacter(new Wizard())
    game.addCharacter(new Character())
    const output = game.startBattle()
    expect(output).toEqual([])
  })
})

describe(`Game.prototype.exploreRoad()`, () => {
  it(`produces 1 of 3 outcomes dependent on the number generated`, () => {
    const game = new Game()
    const outcome = game.exploreRoad()
    const possibleOutcomes = [BONUS, PROGRESS, ENCOUNTER]
    const expected = possibleOutcomes.includes(outcome)
    expect(expected).toEqual(true)
  })
})
describe(`diceRoll()`, () => {
  it(`produces an int between 1 and the provided int, inclusive`, () => {
    const int = 100
    const randomRoll = diceRoll(int)
    const rollIsValid = randomRoll <= int && randomRoll >= 1
    expect(rollIsValid).toEqual(true)
  })
})
