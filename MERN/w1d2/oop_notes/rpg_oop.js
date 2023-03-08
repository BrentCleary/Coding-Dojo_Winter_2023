// OOP IN JAVASCRIPT

class RPGClass {
    constructor()
    {
        this.strength = 10;
        this.dexterity = 10;
        this.intelligence = 10
        this.health = 100;
    }

    attack(target)
    {
        target.health -= this.strength;
    }

    rest()
    {
        this.health += 10;
    }
}

const player1 = new RPGClass()
const player2 = new RPGClass()

player1.attack(player2)

console.log("Player 1 health: ", player1.health)
console.log("Player 1 health: ", player2.health)

console.log(player1)


// JS objects are NOT like Python objects
// JS objects are like Python dictionaries

class Rogue extends RPGClass{
    constructor() 
    {
        super();
        this.dexterity = 35
    }

    sneakShot(target) 
    {
        target.health -= this.dexterity + (this.dexterity * .5)
    }

}

const rogue1 = new Rogue();
const rogue2 = new Rogue();

rogue1.attack(rogue2)
rogue2.sneakShot(rogue1)

console.log("Rogue 1 HP: ", rogue1.health)
console.log("Rogue 2 HP: ", rogue2.health)