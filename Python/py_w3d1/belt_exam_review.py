'''

FLOW - 

Boiler Plate for Login and Registration Completed

Boiler Plates for 

- __init__.py
- server.py
- flask_app
    - config
    - controllers
    - models
    - static
    - templates

    HTML
    - registration forms
    - login pages


STEP 1:

CREATE ERD

- DETERMINE MODELS
    - ATTRIBUTES
    - RELATIONSHIPS
        - ONE TO MANY (REMEMBER TO CLICK "MANY" Table FIRST THEN "ONE" table)
    - Save ERD
    - FORWARD ENGINEER DATABASE
    - CHECK INSTANCE OF THE TABLE
        - TRY SELECTS OF TABLES AND MAKE SURE ATTRIBUTES ARE POPULATING


STEP 2:

- Create Model (class) for each table
    - Create Model for one Table
    - Create Model for many Table

- Create cls Method for SELECT to display info
    - SELECT * FROM "table"

    #  This JOINS ALL parties with their user parent
    -   SELECT * FROM parties
        JOIN users
        ON users.id = parties.user_id;

    # This JOINS all parties and all users, even if they don't have parties
    -   SELECT * FROM parties
        LEFT JOIN users
        ON users.id = parties.user_id;


    # For a show-one select, you need to insert Data to select for a specific user
    -   SELECT * FROM parties
        LEFT JOIN users
        ON users.id = parties.user_id
        WHERE user.id = %(id)s;


    INSTANTIATING LISTS OF DICTIONARIES

    results = connectToMySQL.....
    all_parties = []
    if results:
        for row in results:
            this_party = cls(row)     # First table that comes back is always unique. Gets instantiated automatic
            # CREATE THE USER FOR THE PART
            user_data ={
                **row,
                'id': row['users.id']
                'created_at': row['users.created_at']
                'updated_at': row['users.updated_at']
            }
            # Now we can make a user
                THIS NEEDS TO GET IMPORTED INTO THE MANY" many table
            this_user = user_model.User(user_data)

            this_party.planner = this_user
            all_parties.append()






HTML NOTES

    
        For a RADIO Button
            - SET "name" to be the same for both radio inputs (Buttons)
                - This will make it so only one can be clicked
            - SET Their value to 0 and 1
                - This should matche the BOOL for the DB column for TinyInt(1) for a true false field



VALIDATOR NOTES

# Static Method for a class in a model

@staticmethod
def validator(form_data)
    #form_data is the parameter that will be filled by (request.form) when called in the method
    
    is_valid = True

    if len(form_data['parameter_name']) < 1;
    is_valid = False;
    flash('what is required')

    













'''