export default class Item {
  constructor(name, types, armor, damage, health) {
    this.name = name
    this.types = types
    this.armor = armor
    this.damage = damage
    this.health = health
  }

  appraiseQuality() {
    const perkSum = this.armor + this.damage + this.health
    const versatilityScore = parseInt(this.types.length / 2, 10)
    const qualityNum = perkSum + versatilityScore
    return qualityNum
  }
}
