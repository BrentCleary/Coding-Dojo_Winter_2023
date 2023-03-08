
from flask_app.config.mysqlconnection import connectToMySQL

from flask import flash
import re #/ this imports from the Python Library
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class Users:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


# Basic Insert query for (request.form) post-methods in routes
    @classmethod
    def Create_User(cls, data):
        query = '''
                INSERT INTO users (first_name, last_name, email, password)
                VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s); 
                '''
        results = connectToMySQL('DATABASE').query_db(query, data)
        return results

# ---------------------- GET ONE USER BY ID --------------------------------

    @classmethod
    def Get_User_By_ID(cls, data):
        query = '''
                SELECT * FROM users
                WHERE users.id = %(id)s;
                '''
        results = connectToMySQL('DATABASE').query_db(query, data)
        one_user = cls(results[0])
        return one_user


# --------------------GET ONE USER BY EMAIL --------------------------------

    @classmethod
    def Get_By_Email(cls, data):
        query = '''
                SELECT * FROM users
                WHERE users.email = %(email)s; 
                '''
        results = connectToMySQL('DATABASE').query_db(query, data)
        if len(results) < 1:
            return False
        
        return cls(results[0])


    # ------------------------ User Validtor ------------------------
    @staticmethod
    def validate(data):
        is_valid = True

        if len(data['first_name']) < 1:
            is_valid = False
            flash("!! first_name required  !!")

        if len(data['last_name']) < 1:
            is_valid = False
            flash("!! last_name required !!")

        if len(data['email']) < 1:
            is_valid = False
            flash("!! email required !!")
        
        # REGEX CHECK FOR VALID EMAIL ADDRESS
        # Regex imported at top of file from flask
        elif not EMAIL_REGEX.match(data['email']): 
            flash("Invalid email address!")
            is_valid = False
        
        # DATABASE CHECK EMAIL AVAILABILITY (Users Method)
        # (is it present in DB, if so return is_valid = False) 
        else:
            data_for_email = {
                'email' : data['email']
                }
            potential_user = Users.Get_By_Email(data_for_email)
            if potential_user:
                is_valid = False
                flash("Email already taken. Use new email.")

        if len(data['password']) < 1:
            is_valid = False
            flash("!! password required !!")

        elif not data['password'] == data['confirm_password']:
            is_valid = False
            flash("!! passwords must match !!")

        return is_valid