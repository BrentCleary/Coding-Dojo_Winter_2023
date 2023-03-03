from mysqlconnection import connectToMySQL

class Users:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    # --------------- SHOW ( ALL ) Users Method ---------------
    @classmethod
    def get_all(cls):
        # defines query for SQL query
        query = "SELECT * FROM users"

        results = connectToMySQL('users_schema').query_db(query)
        print(results)

        user_instances = []
        if results:
            for row in results:
                this_user = cls(row)
                user_instances.append(this_user)
        return user_instances


    # --------------- SHOW ( ONE ) User Method ---------------
    @classmethod
    def ShowOne(cls, data):
        # SELECT RETURNS A LIST OF DICTIONARIES
        query = '''
                SELECT * FROM users
                WHERE users.id = %(id)s;
                '''
        results = connectToMySQL('users_schema').query_db(query, data)
        user = cls(results[0])
        return user


    # --------------- CREATE Users Method ---------------
    @classmethod
    def Create(cls, data):
        print('User_model.py =====> ', data)
        query = '''
                INSERT INTO users (first_name, last_name, email)
                VALUES (%(first_name)s, %(last_name)s, %(email)s);
                '''
        results = connectToMySQL('users_schema').query_db(query, data)
        return results


    # --------------- UPDATE Users Method ---------------
    @classmethod
    def Update(cls, data):
        query = '''
                UPDATE users
                SET first_name = %(first_name)s,
                last_name = %(last_name)s,
                email =  %(email)s
                WHERE id = %(id)s;
                '''
        
        results = connectToMySQL('users_schema').query_db(query, data)

        return results

    # --------------- DELETE Users Method ---------------
    @classmethod
    def Delete(cls, data):
        data = {'id': data}
        query = '''
                DELETE FROM users
                WHERE users.id = %(id)s;
                '''

        results = connectToMySQL('users_schema').query_db(query, data)
        return results