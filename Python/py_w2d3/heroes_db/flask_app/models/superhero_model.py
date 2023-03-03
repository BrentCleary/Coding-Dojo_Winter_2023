# This model file interacts with the database
from mysqlconnection import connectToMySQL
from flask_app import database


# Left side of the constructor is Python
# Right side is SQL
# Number of parameters must match
class Hero:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.power = data['power']
        self.level = data['level']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

# All queries are classmethods
# So they have access to the class
# We want to call these methods regardless if we have an instance of the class

# ---------------READ ALL ------------------
    @classmethod
    def get_all(cls):
        # Defines the search parameter in MYSQL query language
        query = "SELECT * FROM heroes"
        
        # Calls imported connectToMySQL function from mysqlconnection.py
        # connects to ('superheroes_db') we created
        # uses query_db function, with parameter (query) we created
        results = connectToMySQL('superheroes_db').query_db(query)
        print(results)
        hero_instances = []
        if results:
            for row in results:
                # This is a class method, so you can say cls, not HERO(Class Name) because cls-methods reference their own class
                # cls(row) calls the constructor of the class, and builds and instance from the database
                this_hero = cls(row)
                hero_instances.append(this_hero)
        return hero_instances

    # ALL QUERIES ARE CLASS METHODS
    @classmethod
    def Create(cls, data):
        print("super_hero_model.py =====> ", data)
        query = '''
                INSERT INTO heroes (name, power, level)
                VALUES (%(name)s, %(power)s, %(level)s) 
                '''
        return connectToMySQL('superheroes_db').query_db(query, data)
        
    # ----- DELETE HERO METHOD -----
    # @classmethod
