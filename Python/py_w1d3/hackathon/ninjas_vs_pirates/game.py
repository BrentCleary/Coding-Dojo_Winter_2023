from classes.ninja import Ninja
from classes.pirate import Pirate
import random

# Player Select

# --------------- I think this needs to be defined in the class -----------
michelangelo = Ninja("Michelanglo")

jack_sparrow = Pirate("Jack Sparrow")

# michelangelo.attack(jack_sparrow, pick_tool)
# jack_sparrow.show_stats()


# Game Start

# generates empty variables to hold instances
player = []
enemy = []
game_continue = True

while game_continue == True:
# Player Select - Assigns
    response = input("Select your character.\n 1) Ninja: Michelanglo\n 2) Pirate: Jack Sparrow")
    # input "1" assigns Ninja to player/ Pirate to enemy. input "2 is opposite" 
    if response == "1":
        player = michelangelo
        enemy = jack_sparrow
    elif response == "2":
        player = jack_sparrow
        enemy = michelangelo

    print(f"You are {player.name}. You approach a {enemy.name}!")
    # clears response
    response = ""
# 
    # Pick Weapon for character (pick_tool)
    pick_tool = input("1) sword\n2) stick\n3) star:\t")
    response = ""

    while not response == "1" and not response == "2":
        response = input("what do you do?\n1) attack? \n2 heal\n>>> ")
        print(response)

        if response == "1":
            player.attack(enemy, pick_tool)
            print(f"[ATTACK]{player.name} attacks {enemy.name}")
            print(f"You have {player.health} hp.")
            print(f"{enemy.name} has {enemy.health} hp.")
            response = ""
        elif response == "2":
            player.show_stats()
            response = ""
#   !!!!!!!!!-------------- Update with Ninja methods 
            # player.heal(food)

        else:
            print(">>> Please choose a valid option")

        print(f"player hp = {player.health}" )
        print(f"enemy hp = {enemy.health}" )    
        if player.health <= 0 or enemy.health <= 0:
            game_continue = False
            break

#         # CPU
#!!!!!!!!!-------------- Update with Pirate methods 
#         dice_roll = random.randint(1,2)
#         if dice_roll == 1:
#             enemy.attack(player)
#         else:
#             enemy.show_stats()

# endgame
print(f"{player.name} hp = ", player.health)
print(f"{enemy.name} hp = ", enemy.health)
if enemy.health <= 0 and player.health > 0:
    print("Congrats! YOU WON!")
else:
    print("You lose...")