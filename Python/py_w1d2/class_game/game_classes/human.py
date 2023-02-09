class Human:
    def __init__(self, data):
        self.name = data[name]
        self.health = 100
        self.age = 30
        self.gender = None
        self.strength = 10
        self.defense = 10
        self.mana = 5

    # 
    def attack(self, enemy):
        print(f"[ATTACK] {self.name} is attacking {enemy.name}")
        enemy.defend(self.strength)

    # taking damage
    def defend(self, damage):
        self.health -= damage
        print(f"[DEFEND] {self.name} takes {damage} DMG and they now have {self.health}")