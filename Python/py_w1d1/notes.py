# # =========
# # Python Fundamentals
# # =========

# """
# This is a multi-line 
# comment
# """

# #variables
# snake_case = "all lower case, seperated by underscore"
# GLOBAL_VAR = "ALL CAPS"

# #Primtive Variables:
# #boolean
# vote = True
# is_admin = False

# my_num = 6
# float_num = 3.14

# name = "brent"
# my_string = "a collection fo characters!"
# formatted_string = f"we can inject variables! {my_num}"

# concat_string = "my number is " + str(my_num)
# print(concat_string)


# #
# #composite types (Classes under the hood)
# #list - aka arrays in JS!
# #list is an array
# #

# my_list = [1,2,3,4,5]
# my_list[1] = 2

# my_list.append(1337)
# my_list.pop(2)
# my_list.sort(reverse=True) #This performs a loop in place on the list


# #dictionaries aka objects in JS
# # difference is these don't have an index
# # they have key:value pairs, and are , seperated

# dog_dict = {
#     'name' : 'Mochi',
#     'age' : 3,
#     'breed' : 'corgi',
#     'goodboi' : True
# }

# print(dog_dict)
# dog_dict['name'] = "booboo"
# print(dog_dict['name'])

# print(f"the length of this list is = {len(my_list)}")


# #-------- conditionals-------------

# #if
# #elif
# #else

# x = 8

# if x == 5:
#     print("x is 5")
# elif x > 5:
#     print("x is big")
# else:
#     print("x is smol")




# """
# Py > JS
# None = null
# not = !

# """

# # iterate over a list

# food_list = ["pizza", "cheese", "ramen","sushi", "more_cheese"]

# for i in food_list:
#     print(i)


cat1 = {
    'name' : 'Cinnamon',
    'age' : 7,
    'color' : 'orange'
}

# for keyvalue in cat1:
#     print(keyvalue, cat1[keyvalue])

capitals = {"Washington":"Olympia","California":"Sacramento","Idaho":"Boise","Illinois":"Springfield","Texas":"Austin","Oklahoma":"Oklahoma City","Virginia":"Richmond"}

for i in capitals:
    print(i)
for i in capitals.keys():
    print(i)
for i in capitals.values():
    print(i)
for i in capitals.items():
    print(i)


cat1 = {
    'name' : 'Cinnamon',
    'age' : 7,
    'color' : 'orange'
}
cat2 = {
    'name' : 'Chonker',
    'age' : 5,
    'color' : 'grey'
}

cat_list = [cat1, cat2]

print(cat_list)

for element in cat_list:
    print(element)
    for cat_key in element:
        print(element[cat_key])


# Functions - A set of instructions

# def defines a function
def greeting():
    print("hello ninja")

greeting()

#! A function call is equal to it's return

#default parameters

def say_hello(name="bob", time=10):
    for i in range(times):
        print(f"{i+1} hello {name}")