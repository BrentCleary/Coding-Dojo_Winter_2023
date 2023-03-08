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
        console.log("Ninja's name is:", this.name)
    }

    showStats()
    {
        console.log("Health is:", this.health)
        console.log("Speed is:", this.speed)
        console.log("Strength is:", this.strength)
    }

    drinkSake()
    {
        this.health += 10;
        console.log("Health is now: ", this.health);
    }
}

const newNinja = new Ninja;

newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();



class Sensei extends Ninja
{
    constructor()
    {
        super()
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom()
    {
        this.drinkSake()
        const wiseMessage = "If a bird falls in the woods, what is the sound of a one tree clapping?"
        console.log(wiseMessage)
    }
}

const oldSensei = new Sensei();

oldSensei.speakWisdom();