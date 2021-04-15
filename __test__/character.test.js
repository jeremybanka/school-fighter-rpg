import Character from "../src/js/characters/Character";

describe(`Character`, () => {
  let character;
  beforeEach(() => {
    character = new Character();
  });

  test(`it should return Ataz for the name`, () => {
    character.name = `Ataz`;
    expect(character.name).toEqual(`Ataz`);
  });
  test(`it should return fire for the type`, () => {
    character.type = `fire`;
    expect(character.type).toEqual(`fire`);
  });
  test(`it should add health by 5`, () => {
    character.addHealth();
    expect(character.health).toEqual(6);
  });
  test(`it should remove health by 5`, () => {
    character.health = 20;
    character.removeHealth();
    expect(character.health).toEqual(15);
  });
  test(`it should kill the character when the 
  health is at or less than 0`, () => {
    character.health = 5;
    character.removeHealth();
    expect(character.health).toEqual(`Game Over!`);
  });
  test(`it should give 10 xp`, () => {
    character.addXP(10);
    expect(character.xp).toEqual(10);
  });
  test(`character will increment level by 1 every factor of 30 xp`, () => {
    character.xp = 30;
    character.levelUpOne();
    expect(character.level).toEqual(2);
  });
  test(`character will not increment level by 1 if not factor of 30 xp`, () => {
    character.xp = 20;
    character.levelUpOne();
    expect(character.level).toEqual(1);
  });

  test(`should receive damage from another character when it deals damage`, () => {
    let newChacter = new Character();
    newChacter.health = 15;
    character.dealDamageToCharacter(newChacter, 5);
    expect(newChacter.health).toEqual(10);
  });
});

// Ataz
// Ephior
// Ogast
// Grukron
