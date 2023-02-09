from game_classes.human import Human

class Rogue(Human):
    def __init__(self, name):
        super().__init__(name)
        self.dodge = 10

    def give_poison(self, enemy):
        enemy.health -= 20
        print(f"[POISON] {self.name} poisons {enemy.name} for 20 dmg, they now have {enemy.health}hp")

shadow = Rogue("Shadow", 70)