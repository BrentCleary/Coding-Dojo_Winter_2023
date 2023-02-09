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


class SecondPet(Pet):
    def __init__(self, name, type, tricks, own_toy):
        super().__init__(name, type, tricks)
        self.own_toy = own_toy
    
    def sleep(self):
        super().sleep()
        return self

    def eat(self):
        super().eat()
        return self

    def play(self):
        super().play()
        return self

    def noise(self):
        print(f"{self.name} let's out a loud 'CHUFF CHUFF CHUFF!' and his brother started barking too!")
        super().noise()
        return self


Pupper2 = SecondPet("GoodBoi", "Doggo", "More to come", "Stuffed Giraffe")
Pupper2.noise()

Pupper1 = Pet("Tyrano", "Doggo", "Very Few")

