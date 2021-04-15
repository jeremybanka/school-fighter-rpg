import Type from "../src/js/characters/type";
import Character from "../src/js/characters/Character";

describe("Type", () => {
  let character;
  let type;
  beforeEach(() => {
    character = new Character();
    type = new Type("Intellect", "Has great prediction capabilities");
  });
  test("This should add a type.name to a character", () => {
    character.addTypeToCharacter(type);
    expect(character.type.name).toEqual("Intellect");

    // expect(character.type.description).toEqual("Has great prediction capabilities");
  });
  test("this should add a type.description to a character", () => {
    character.addTypeToCharacter(type);
    expect(character.type.description).toEqual(
      "Has great prediction capabilities"
    );
  });
});
