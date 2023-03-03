from flask_app import app
from flask import render_template, redirect, request
from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']


# ------------ SHOW ALL NINJAS METHOD ------------------

    @classmethod
    def Get_All_Ninjas(cls, data):
        query = '''
                SELECT * FROM ninjas
                WHERE ninja.dojo_id = dojo.id;
                '''
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query ,data)
        return results


# ---------- CREATE NINJA METHOD

    @classmethod
    def Create_New_Ninja(cls, data):
        query = '''
                INSERT INTO ninjas (first_name, last_name, age, dojo_id)
                VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s);
                '''
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return results