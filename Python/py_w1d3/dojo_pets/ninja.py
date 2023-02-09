from pet import Pupper1

class Ninja:
    def __init__(self, first_name, last_name, pet, treats, pet_food):
        self.first_name = first_name
        self.last_name = last_name
        self.pet = pet
        self.treats = treats
        self.pet_food = pet_food

    def walk(self):
        self.pet.play()
        print(f"{self.first_name} took {self.pet.name} for a walk.")
        return self
    
    def feed(self):
        self.pet.eat()
        print(f"{self.first_name} fed {self.pet.name} {self.pet_food}.")
        return self
    
    def bathe(self):
        print(f"{self.first_name} gave {self.pet.name} a bath.")
        self.pet.noise()
        return self

Shinobi1 = Ninja("Bob", "Shadows", Pupper1, "Rawhide", "Goats")

Shinobi1.walk().feed().bathe()