class Ninja {
    constructor()
    {
        this.name = "Ryu"
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName()
    {
        console.log(this.name)
    }

    showStats()
    {
        console.log(this.health, this.speed, this.strength)
    }

    drinkSake()
    {
        this.health += 10;
        console.log(this.health);
    }
}

const newNinja = new Ninja;

newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();
