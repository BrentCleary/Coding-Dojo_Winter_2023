class Player:
    def __init__(self, data):
        self.name = data['name']
        self.age = data['age']
        self.position = data['position']
        self.team = data['team']

    # info display method
    def display_info(self):
        print(f"name: {self.name} \n age: {self.age} \n position: {self.position} \n team: {self.team}")

    #class method
    @classmethod
    def get_team(cls, team_list):
        new_team = []
        for player in team_list:
            new_team.append(Player(player))
        return new_team


# Challenge 2
# Data for player creation
kevin = {
    "name": "Kevin Durant", 
    "age": 34, 
    "position": "small forward", 
    "team": "Brooklyn Nets"
}
jason = {
    "name": "Jason Tatum", 
	"age": 24, 
	"position": "small forward", 
    "team": "Boston Celtics"
}
kyrie = {
    "name": "Kyrie Irving", 
    "age": 32,
    "position": "Point Guard", 
    "team": "Brooklyn Nets"
}

# Create your Player instances here!
player_kevin = Player(kevin)
player_jason = Player(jason)
player_kyrie = Player(kyrie)


# Challenge 3
# Pass in all the values from the dictionary by their keys

players = [
    {
    "name": "Kevin Durant", 
    "age": 34, 
    "position": "small forward", 
    "team": "Brooklyn Nets"
    },
    {
    "name": "Jason Tatum", 
    "age": 24, 
    "position": "small forward", 
    "team": "Boston Celtics"
    },
    {
    "name": "Kyrie Irving", 
    "age": 32,
    "position": "Point Guard", 
    "team": "Brooklyn Nets"
    },
    {
    "name": "Damian Lillard", 
    "age": 33,
    "position": "Point Guard", 
    "team": "Portland Trailblazers"
    },
    {
    "name": "Joel Embiid", 
    "age": 32,
    "position": "Power Foward", 
    "team": "Philidelphia 76ers"
    },
    {
    "name": "DeMar DeRozan",
    "age": 32,
    "position": "Shooting Guard",
    "team": "Chicago Bulls"
    }
]

challenge3_team = []

for player in players:
    challenge3_team.append(Player(player))

for player in challenge3_team:
    player.display_info()


# Ninja Bonus

bonus_team = Player.get_team(players)

for player in bonus_team:
    player.display_info()
