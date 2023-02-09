import random

class Ninja:
    def __init__(self, name):
        self.name = name
        self.strength = 10
        self.speed = 5
        self.health = 100
        self.damage = random.randint(1, 40)
        self.heal = 0

    def show_stats(self):
        print(
            f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n"
        )

    def attack(self, enemy, tool):
        print(
            f"[ATTACK]{self.name} attacked with a {tool} and gave {enemy.name} -{self.damage+self.strength}pts"
        )
        enemy.health -= self.strength + self.damage
        return self

    def healing(self, food):
        print(food)
        if food == "apple":
            self.health += self.heal + 15
        if food == "herb":
            self.health += self.heal + 30
        print(f"{self.name} used {food} and increased {self.healing}pts")