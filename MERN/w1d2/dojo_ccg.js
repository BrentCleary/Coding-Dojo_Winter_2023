class Card
{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card
{
    constructor(name, cost, power, resilience)
    {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target)
    {
        target.resilience -= this.power;
        console.log('######');
        console.log(this.name + " attacks " + target.name);
        console.log(target.name + "'s resilience is " + target.resilience);
        console.log('######');
    }
}

class Effect extends Card
{
    constructor(name, cost, text, stat, magnitude)
    {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;

    }

    play( target )
    {
        if( target instanceof Unit )
        {
            if(this.stat == "resilience")
            {
                target.resilience += this.magnitude;
                console.log('~~~~~~~');
                console.log(this.name + " casts on " + target.name);
                console.log(target.name + "'s resilience is " + target.resilience);
                console.log('~~~~~~~');
            }
            else
            {
                console.log('~~~~~~~');
                target.power += this.magnitude;
                console.log(target.name + "'s power is " + target.power);
                console.log('~~~~~~~');
            }
        }
        else
        {
            throw new Error( "Target must be a unit!" );
        }
    }
}


const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const HardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilence", -2);
const PairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);


RedBeltNinja.attack(BlackBeltNinja);
HardAlgo.play(RedBeltNinja);
BlackBeltNinja.attack(RedBeltNinja)
UnhandledPromiseRejection.play(BlackBeltNinja);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja)

