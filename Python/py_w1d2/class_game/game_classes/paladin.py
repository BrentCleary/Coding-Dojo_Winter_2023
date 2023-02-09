from game_classes.human import Human

# In order to be a sub-class, you must first be a parent class
# Paladins can only be sub-classes of Human
# If the parent class constructor has a parameter, the sub class must also have a parameter

# -----Super() calls on the parent constructor-----

class Paladin(Human):
    def __init__(self, paladin_name):
        super().__init__(paladin_name, 80)

    # Polymorphism - Overrides the parent(super) class method
    def defend(self, damage):
        self.health -= (damage + 10)
        print(f"[DEFEND] {self.name} takes {damage} DMG and they now have {self.health}")

    def heal(self):
        self.health += 10
        print(f"[HEAL] {self.name} heals for 10hp and they now have {self.health}")