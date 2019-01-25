/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
  * 
*/

/*
function GameObject(attrs) {
    this.createdAt = attrs.createdAt;
    this.dimensions = attrs.dimensions;
  }
  
  GameObject.prototype.destroy = function() {
    return "Object was removed from the game.";
  };
  /*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  /*
  function CharacterStats(CharacterData) {
    GameObject.call(this, CharacterData);
  
    this.healthPoints = CharacterData.healthPoints;
    this.name = CharacterData.name;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function() {
    return this.name + " took damage."; 
  };
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
 /*
   
  function Humanoid(HumanoidStats) {
    CharacterStats.call(this, HumanoidStats); //?
    this.team = HumanoidStats.team;
    this.weapons = HumanoidStats.weapons;
    this.language = HumanoidStats.language; 
  }
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function() {
    return this.name + " offers a greeting in " + this.language; //? 
  };
*/
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
/*

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(gameObjectProperties){
        this.createdAt = gameObjectProperties.createdAt;
        this.dimensions = gameObjectProperties.dimensions;
    }

    destroy() {
        return "Object was removed from the game.";
    }
}

class CharacterStats extends GameObject {
    constructor(CharacterProperties) {
        super(CharacterProperties);
        this.healthPoints = CharacterProperties.healthPoints;
        this.name = CharacterProperties.name; 
    }

    takeDamage() {
        return this.name + " took damage."; 
    }
}

class Humanoid extends CharacterStats {
    constructor(HumanoidProperties) {
        super(HumanoidProperties);

        this.team = HumanoidProperties.team;
        this.weapons = HumanoidProperties.weapons;
        this.language = HumanoidProperties.language; 
    }

        greet() {
            return this.name + " offers a greeting in " + this.language;
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

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.