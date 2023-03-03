from flask_app import app
from flask import render_template
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninja_model import Ninja

class Dojos:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.created_at = data['updated_at']


# ------------ SHOW ALL DOJOS METHOD ------------------

    @classmethod
    def get_all_dojos(cls):
        query = """
                SELECT * FROM dojos;
                """
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        # print(results)

        dojo_instances = []
        if results:
            for row in results:
                this_dojo = cls(row)
                dojo_instances.append(this_dojo)
        return dojo_instances


# ------------ CREATE NEW DOJO METHOD ------------------

    @classmethod
    def Create_Dojo(cls, data):
        print('===============', data)
        query = '''
                INSERT INTO dojos (name)
                VALUES (%(name)s);
                '''
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query ,data)
        return results


# ------------ SHOW DOJO NINJAS METHOD ------------------
    @classmethod
    def Join_Dojos_And_Ninjas(cls, data):
        query = '''
                SELECT * FROM dojos
                LEFT JOIN ninjas
                ON dojos.id = ninjas.dojo_id
                WHERE dojos.id = %(id)s;
                '''
        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        print('======================', results, '===========================')
        if results:
            this_dojo = cls(results[0]) # Creates the DOJO Instance
            the_ninjas = []
            for row in results:
                # formating ninja data here
                # prepares the dictionary for the Ninja Constructor
                ninja_dict = {
                    **row,
                    'id' : row['ninjas.id'],
                    'first_name' : row['first_name'],
                    'last_name' : row['last_name'],
                    'age' : row['age'],
                    'created_at' : row['ninjas.created_at'],
                    'updated_at' : row['ninjas.updated_at'],
                    'dojo_id' : row['dojo_id']
                }
                this_ninja = Ninja(ninja_dict)
                the_ninjas.append(this_ninja)
            
            # create a new attribute for the dojo
            this_dojo.ninjas = the_ninjas


            return this_dojo

        return False
