from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import users_model
from flask import flash
from flask_app import DATABASE

class Sighting:
    def __init__(self, data):
        self.id = data['id']
        self.location = data['location']
        self.what = data['what']
        self.time = data['time']
        self.number = data['number']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']


# ----------------------- GET ( ALL ) sightings WITH USER - METHOD --------------------------------

    @classmethod
    def get_all_sightings(cls):
        query = '''
                SELECT * FROM sightings
                JOIN users
                ON users.id = sightings.user_id;
                '''
        results = connectToMySQL(DATABASE).query_db(query)
        print(results)
        
        all_sightings = []
        if results:
            for row in results:
                # Create the sighting
                this_sighting = cls(row)
                # Create the user
                user_dict = {
                    **row,
                    'id' : row['users.id'],
                    'created_at' : row['users.created_at'],
                    'updated_at' : row['users.updated_at']
                }
                this_user = users_model.Users(user_dict)
                this_sighting.reporter = this_user
                all_sightings.append(this_sighting)

        return all_sightings


# ----------------------- GET ( ONE ) sightings METHOD --------------------------------
    @classmethod
    def get_one_sighting(cls, data):
        query = '''
                SELECT * FROM sightings
                WHERE sightings.id = %(id)s;
                '''
        results = connectToMySQL(DATABASE).query_db(query, data)
        print(results)
        sighting = cls(results[0])
        return sighting



# ----------------------- CREATE sighting METHOD --------------------------------
    @classmethod
    def create_sighting(cls, data):
        query = '''
            INSERT INTO sightings (location, what, time, number,user_id)
            VALUES (%(location)s, %(what)s, %(time)s, %(number)s, %(user_id)s);
            '''
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results


# ----------------------- EDIT sighting METHOD --------------------------------
    @classmethod
    def edit_sighting(cls, data):
        query = '''
            UPDATE sightings
            SET location = %(location)s,
            what = %(what)s,
            time = %(time)s,
            number = %(number)s,
            user_id = %(user_id)s
            WHERE id = %(id)s;
            '''
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results


# =========================== DELETE sighting ===================================

    @classmethod
    def delete_sighting(cls, data):
        query = '''
                DELETE FROM sightings
                WHERE sightings.id = %(id)s;
                '''
        results = connectToMySQL(DATABASE).query_db(query, data)
        return results



# ======================== sighting VALIDATOR ==================================

    @staticmethod
    def sighting_validator(form_data):
        is_valid = True

        if len(form_data['location']) < 1:
            is_valid = False
            flash('Please enter a location') 
        
        if len(form_data['what']) < 1:
            is_valid = False 
            flash('Please enter a description') 
        
        if len(form_data['time']) < 1:
            is_valid = False 
            flash('Please enter time') 
        
        if len(form_data['number']) < 1:
            is_valid = False 
            flash('Select a number') 
        
        return is_valid


