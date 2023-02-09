# Dog is a Class

# attributes belong to a class of Dog
'''
legs
tail
fur
age
breed
color    
'''

# methods are things the Class(Dog) can do
'''
bark()
run()
fetch()
eat()
'''

# Other Class
# Robot
'''
cpu
metalType
tech
antenna
health
casing
'''
# methods a Robot(Class) could have
"""
lift()
drop()
serve()
code()
"""

# You can create multiple robots, all copies of Robot(Class)

# ----- Classes are blueprints "for" objects -----#
# ----- Objects are "instances" of Classes -----#

# Class(Robot)  > (Robot-Object)Instance-1
#               > (Robot)Instance-2
#               > (Robot)Instance-3


# --------------------- Create a Class

# __init__ - The constructor 

class Dog:
    # constructor - creates a defaults and builds the class
    def __init__(self, name, age, breed):
        # ? attributes
        #  self.attribute refers to the class being constructed
        self.name = name
        self.age = age
        self.breed = breed

    #  ----- methods ------
    # All Methods take in self
    def bark(self):
        print(f"{self.name} makes a loud bark!!!!!!")
        return self

    def birthday(self):
        print(f"{self.name} gets a year older, and they are now {self.age}")
        self.age = self.age + 1
        return self

    # __main__ = it ran directly from the file
    # __repr__ = overwrites the <__main__.Dog object at 0x00001544556>
    # __repr__ means "represents" 
    # string representation of the instance
    def __repr__(self):
        return f"{self.name} is a {self.breed}"

# ----- Classes use  . notation

dogMaggie = Dog("Maggie",  6, "Beagle/Pit")
dogRex = Dog("Rex",  10, "German Shepherd")

print(f"{dogMaggie.name} is a {dogMaggie.breed}")
dogRex.bark()

dogRex.birthday()
dogRex.birthday().bark().birthday()
