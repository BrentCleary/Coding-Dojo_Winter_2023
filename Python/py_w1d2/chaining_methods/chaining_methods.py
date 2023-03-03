class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_reward_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(f'{self.first_name}')
        print(f'{self.last_name}')
        print(f'{self.email}')
        print(f'{self.age}')
        print(f'{self.is_reward_member}')
        print(f'{self.gold_card_points}')
        return self

    # Loop through method
    def display_info_again(self):
        for item in self.__dict__:
        # self.__dict__ - Turns a user object into a dictionary
        # for item - loops throught the created dictionary
            print(self.__dict__[item])
            # prints returned indexes of dictionary self.__dict__
            return self

    def enroll(self):
        if self.is_reward_member == True:
            print("Already a member")
            return
        else:
            self.is_reward_member = True
            self.gold_card_points = 200
            print(self.is_reward_member, self.gold_card_points)
            return self

    def spend_points(self, minusPoints=75):
        if self.gold_card_points < minusPoints:
            print("not enough points")
        else:
            self.gold_card_points = self.gold_card_points - minusPoints
            print(self.gold_card_points)
            return self



first_user = User("Terry", "Bogard", "BurnKnuckle@kof.com", 25)
second_user = User("Ken", "Masters", "RyuBro@SF.com", 30)
third_user = User("Kelly", "Kapowski", "ItsAllRight@SBTB.com", 18)

first_user.display_info().display_info_again().spend_points(50)
second_user.enroll().spend_points(80).enroll()
third_user.display_info()

third_user.spend_points(40)