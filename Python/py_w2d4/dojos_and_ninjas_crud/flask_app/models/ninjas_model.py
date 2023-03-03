class Ninjas:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.dojo_id = data['dojo_id']

    # --------------- SHOW ( ALL ) NINJAS Method ---------------
    @classmethod
    def get_all(cls):
        # defines query for SQL query
        query = "SELECT * FROM ninjas"

        results = connectToMySQL('dojos_and_ninjas_schema').query_db(query)
        print(results)

        user_instances = []
        if results:
            for row in results:
                this_ninja = cls(row)
                user_instances.append(this_ninja)
        return user_instances