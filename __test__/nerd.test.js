import Nerd from '../src/js/characters/Nerd'
import Character from '../src/js/characters/Character'

describe('Nerd', () => {
  let nerd;
  let character;
  beforeEach(() => {
    nerd = new Nerd()
    character = new Character()
    character.health = 50
  })
  test('this should deal damage when they hack email', () => {
    nerd.hackEmailOfCharacter(character)
    expect(character.health).toEqual(10)
  });

});
