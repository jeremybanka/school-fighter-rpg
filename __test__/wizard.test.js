import Wizard from '../src/js/characters/Wizard'

describe(`Wizard`, () => {
  let wizard
  beforeEach(() => {
    wizard = new Wizard()
  })

  test(`it should return Ataz for the name`, () => {
    wizard.name = `Ataz`
    expect(wizard.name).toEqual(`Ataz`)
  })
  test(`it should return fire for the type`, () => {
    wizard.type = `fire`
    expect(wizard.type).toEqual(`fire`)
  })
  test(`it should add health by 5`, () => {
    wizard.addHealth()
    expect(wizard.health).toEqual(25)
  })
  test(`it should remove health by 5`, () => {
    wizard.removeHealth()
    expect(wizard.health).toEqual(15)
  })
  test(`it should kill the character when the 
  health is at or less than 0`, () => {
    wizard.health = 5
    wizard.removeHealth()
    expect(wizard.health).toEqual(`Game Over!`)
  })
})



// Ataz
// Ephior
// Ogast
// Grukron
