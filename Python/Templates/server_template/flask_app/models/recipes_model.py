from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import users_model
from flask import flash

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_made = data['date_made']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']


# ----------------------- GET ( ALL ) RECIPES WITH USER - METHOD --------------------------------

    @classmethod
    def Get_All_Recipes(cls):
        query = '''
                SELECT * FROM recipes
                JOIN users
                ON users.id = recipes.user_id;
                '''
        results = connectToMySQL('users_and_recipes').query_db(query)
        print(results)
        
        all_recipes = []
        if results:
            for row in results:
                # Create the recipe
                this_recipe = cls(row)
                # Create the user
                user_dict = {
                    **row,
                    'id' : row['users.id'],
                    'created_at' : row['users.created_at'],
                    'updated_at' : row['users.updated_at']
                }
                this_user = users_model.Users(user_dict)
                this_recipe.creator = this_user
                all_recipes.append(this_recipe)

        return all_recipes


# ----------------------- GET ( ONE ) RECIPES METHOD --------------------------------
    @classmethod
    def Get_One_Recipe(cls, data):
        query = '''
                SELECT * FROM recipes
                WHERE recipes.id = %(id)s;
                '''
        results = connectToMySQL('users_and_recipes').query_db(query, data)
        print(results)
        recipe = cls(results[0])
        return recipe



# ----------------------- CREATE RECIPE METHOD --------------------------------
    @classmethod
    def Create_Recipe(cls, data):
        query = '''
            INSERT INTO recipes (name, description, instructions, date_made, under_30, user_id)
            VALUES (%(name)s, %(description)s, %(instructions)s , %(date_made)s, %(under_30)s, %(user_id)s);
            '''
        results = connectToMySQL('users_and_recipes').query_db(query, data)
        return results


# ----------------------- EDIT RECIPE METHOD --------------------------------
    @classmethod
    def Edit_Recipe(cls, data):
        query = '''
            UPDATE recipes
            SET name = %(name)s,
            description = %(description)s,
            instructions = %(instructions)s,
            date_made = %(date_made)s,
            under_30 = %(under_30)s,
            user_id = %(user_id)s
            WHERE id = %(id)s;
            '''
        results = connectToMySQL('users_and_recipes').query_db(query, data)
        return results


# =========================== DELETE RECIPE ===================================

    @classmethod
    def Delete_Recipe(cls, data):
        query = '''
                DELETE FROM recipes
                WHERE recipes.id = %(id)s;
                '''
        results = connectToMySQL('users_and_recipes').query_db(query, data)
        return results



# ======================== RECIPE VALIDATOR ==================================

    @staticmethod
    def Recipe_validator(form_data):
        is_valid = True

        if len(form_data['name']) < 1:
            is_valid = False
            flash('Please enter a name') 
        
        if len(form_data['description']) < 1:
            is_valid = False 
            flash('Please enter a description') 
        
        if len(form_data['instructions']) < 1:
            is_valid = False 
            flash('Please enter instructions') 
        
        if len(form_data['date_made']) < 1:
            is_valid = False 
            flash('Please enter a date') 
        
        if 'under_30' not in form_data:
            is_valid = False 
            flash('Please select yes or no')
        
        return is_valid


