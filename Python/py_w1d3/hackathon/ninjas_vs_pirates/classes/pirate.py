import random

class Pirate:
    def __init__( self , name):
        self.name = name
        self.strength = 15
        self.speed = 3
        self.health = 100
        self.damage = random.randint(1, 40)
        self.heal = 0


    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack(self, enemy, tool):
        print(f'[ATTACK]{self.name} attacked and gave {enemy.name} {self.damage+self.strength}pts')
        enemy.health -= self.strength + self.damage
        
    def healing(self, food):
        if(food == 'apple'):
            self.health += self.healing+15
        elif(food == 'herb'):
            self.health += self.healing+30
        print(f'{self.name} used {food} and increased {self.healing}pts')

    # def pick_tool(self, tool):


