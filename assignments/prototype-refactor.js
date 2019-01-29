/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(attr) {
    this.createdAt = attr.createdAt;
    this.dimensions = attr.dimensions;
  }

  destroy() {
    return 'Object was removed from the game.';
  }
}

class CharacterStats extends GameObject {
  constructor(attr) {
    super(attr);
    this.healthPoints = attr.healthPoints;
    this.name = attr.name;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(attr) {
    super(attr);
    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
  }

  greet() {
    return `${this.name} greets in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

// TEST below

console.log('Mage Date:::', mage.createdAt); // Today's date
console.log('Archer Dimension:::', archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log('Swordsman Health:::', swordsman.healthPoints); // 15
console.log('Mage Name:::', mage.name); // Bruce
console.log('Swordsman Team:::', swordsman.team); // The Round Table
console.log('Mage Weapon:::', mage.weapons); // Staff of Shamalama
console.log('Archer language:::', archer.language); // Elvish
console.log('Archer Greet:::', archer.greet()); // Lilith offers a greeting in Elvish.
console.log('Mage Damage:::', mage.takeDamage()); // Bruce took damage.
console.log('Swordsman Destroy:::', swordsman.destroy()); // Sir Mustachio was removed from the game.
