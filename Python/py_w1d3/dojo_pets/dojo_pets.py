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

class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health = 100
        self.energy = energy = 100

    def sleep(self):
        self.energy = self.energy + 25
        return self

    def eat(self):
        self.energy = self.energy + 5
        self.health = self.health + 10
        return self

    def play(self):
        self.health = self.health + 5
        return self

    def noise(self):
        print(f"{self.name} let's out a loud 'KURCHUMF'")
        return self

Pupper1 = Pet("Tyrano", "Doggo", "Very Few")
Shinobi1 = Ninja("Bob", "Shadows", Pupper1, "Rawhide", "Goats")

Shinobi1.walk().feed().bathe()