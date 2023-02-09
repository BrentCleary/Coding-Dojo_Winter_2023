from game_classes.paladin import Paladin
from game_classes.rogue import Rogue
from game_classes.rogue import Human
import random

bob = Paladin("bob")
shadow = Rogue("Shadow")

character_data_list = [
    {"name": "bob"},
    {"name": "jenny"},
    {"name": "astro"},
]

playable_characters = []

for one_class in character_data_list:
    print(one_class)
    playable_characters.append(Human(one_class))

print(playable_characters)

while shadow.health > 0 and bob.health > 0:
    print("you are the great Paladin. You approach a rogue!")
    response = ""

    while not response == "1" and not response == "2":
        response = input("what do you do?\n1) attack? \n2 heal\n>>> ")
        print(response)

        if response == "1":
            bob.attack(shadow)
        elif response == "2":
            bob.heal()
        else:
            print(">>> Please choose a valid option")

        # CPU
        dice_roll = random.randint(1,2)
        if dice_roll == 1:
            shadow.attack(bob)
        else:
            shadow.give_poison(bob)

# endgame
print("bob hp = ", bob.health)
print("shadow hp = ",shadow.health)
if bob.health > 0:
    print("Congrats! YOU WON!")
else:
    print("You lose...")
