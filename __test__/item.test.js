import { Item } from "../src/js/items"

describe(`Item`, () => {
  it(`creates a new item`, () => {
    const item = new Item(`journal`, [`emo`, `nerd`], 0, 2, 2)
    const expected = {
      name: `journal`,
      types: [`emo`, `nerd`],
      armor: 0,
      damage: 2,
      health: 2,
    }
    expect(item).toEqual(expected)
  })
})
describe(`Item.prototype.appraiseQuality()`, () => {
  it(`will return the quaility score of an item`, () => {
    const item = new Item(`journal`, [`emo`, `nerd`], 0, 2, 2)
    const itemQuality = item.appraiseQuality()
    expect(itemQuality).toEqual(5)
  })
})
