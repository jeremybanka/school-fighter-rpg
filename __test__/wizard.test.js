import Wizard from '../src/js/characters/Wizard'

describe(`Wizard`, () => {
  test(`it should return Ataz for the name`, () => {
    let wizard = new Wizard()
    expect(wizard.name).toEqual(`Ataz`)
  })
})

// Ataz
// Adalore
// Qruviar
// Kriphior
// Greras
// Grefarihm
// Agorim
// Ephior
// Ogast
// Grukron

// `` does it have?