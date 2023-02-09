# abstraction
'''
Examples:
- Math.random() - Don't need to know "how it does it, just how to use it/what it does
- Gas Pedal - What it does, how to use it. Don't need to know how the engine works.
'''

# encapsulation
'''
Protection of information in a code/data structure
- Protecting SS numbers/birthdays of users.
'''

# Inheritence
'''
Child objects inherit attributes from the instructor/parent
'''

# Polymorphism
'''
Difference between classes/inheritance
- "Tesla is a car. Are Tesla's are cars, but not all cars are Tesla's."

'''


class Human:
    def __init__(self):
        self.name = "Generic Human"
        self.health = 100
        self.age = 30
        self.gender = None
        self.strength = 10
        self.defense = 10
        self.mana = 5

    # 
    def attack(self, enemy):
        print(f"[ATTACK] {self.name} is attacking {enemy.name}")
        enemy.defense(self.strength)

    # taking damage
    def defense(self, damage):
        self.health -= damage
        print(f"[DEFEND] {self.name} takes {damage} DMG and they now have {self.health}")


