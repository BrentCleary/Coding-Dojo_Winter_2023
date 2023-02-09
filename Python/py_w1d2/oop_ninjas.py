# Review OOP, classes, constructor
#  classmethod, staticmethod

class Ninja:
    # Class Method - belongs to the Class - NOT the instance
        # Is not part of the constructor
        # Does not affect instances

    all_ninjas = []

    # Constructor - Creates instances of the Class
    def __init__(self, name, health, age, weapon):
        self.name = name
        self.health = health
        if Ninja.check_age(age):
            self.age = age
        else:
            return
        self.weapon = Weapon(22, "any", "bubbles", 100)
        Ninja.all_ninjas.append(self)

    def display_stats(self):
        print("name: " + self.name + " has " + str(self.health) + "hp")

    def eat_strawberry(self):
        self.health = self.health + 10
        print(f"{self.name} ate a strawberry and they now have {self.health}")

    def attack(self, enemy_ninja):
        print(f"{self.name} is attacking {enemy_ninja.name}")
        enemy_ninja.health -= self.weapon.damage
        print(f"{enemy_ninja.name} gets attacked by {self.name} with {self.weapon.damage}\n they now have {enemy_ninja.health}")

    @classmethod
    def party(cls):
            # cls - accesses the class
        print(cls.all_ninjas)
        for one_ninja in cls.all_ninjas:
            print(one_ninja.eat_strawberry())

    # Static Methods
        # Have no reference to the constructor, class methods, or the class themselves
        # Stationary or non-chaning methods
        # Have no access to anything in the class
        # Independent (sort of like a tool hanging out in the class. Used for ulitity or validations)
    @staticmethod
    def check_age(age):
        is_valid = True
        if age < 18:
            is_valid = False
            print("You are not old enough to enter the dojo")
        return is_valid


# ----------------- Other Class------------------------

class Weapon:
    def __init__(self, data, durability=100):
        self.damage = data["damage"]
        self.type = data["type"]
        self.name = data["name"]
        self.durability = durability


katana = {
    "damage" : 20,
    "type" : "melee",
    "name" : "katana",
}

lasers = {
    "damage" : 200,
    "type" : "rang",
    "name" : "laz0rs",
}

weapon1 = Weapon(lasers)
# weapon2 = Weapon(5, "range", "crossbow")



# USE DOT NOTATION TO CALL -------OBJECT------ ATTRIBUTES
ninja1 = Ninja("Michael Angelo", 100, 19, weapon1)
ninja2 = Ninja("Naruto", 50, 18, lasers)
ninja3 = Ninja("dude", 50, 10, katana)

Ninja.party()

ninja1.attack(ninja2)
ninja2.attack(ninja1)

print(ninja1.name)
ninja1.display_stats()
ninja1.eat_strawberry()
ninja1.eat_strawberry()

ninja2.eat_strawberry()
ninja2.display_stats()




#  Class Methods vs Instance Methods
# Instance Methods refer to self- They take in the self
# Class methods take in the class as a whole
    # Class methods keep track of global variables in the class
    # A class method refers to the Class attributes (how many instances of THIS class exist)
        # Class methods do not have access to the instance
        # There is no self
        # They do not individually change an instance
        # They cannot be changed from the Class