import "../styles/font-face.scss"
// LOGIC
import Game from "./game"
import { Character } from "./characters"

// console.log(new Wizard())
const game = new Game()
console.log(game)

game.addCharacter(new Character())
game.addCharacter(new Character())
game.addCharacter(new Character())

console.log(game.startBattle())
