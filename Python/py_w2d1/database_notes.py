# Database Notes

# MySQL - A relational database

'''
Relationships
One to One
One to Many
Many to Many

Data is stored in tables: Rows and Columns

ERD - Entity Relational Diagram



- When making a database, make the table names plural and all lowercase
users
concert_tickets
holiday_events


For all info

id
-"some info"
-"some info"
created at
updated at


Foriegn Keys:

- Foriegn keys are the id's of related databases
- The Foreign key will always be on the many side
    A "user" can have "many" orders.
        So the User.ID will always be attached to the order, which there can be multiple of
    
    User to Orders - One to Many

Many to Many 
- Orders to Items
- Pizza to Toppings / Toppings to Pizza
    A pizza can have many toppings
    A topping can be on many pizzas

    Needs a middle table - A "JOIN" table

        Holds both tables Ids

        ID, ID, created_at, updated_at






Creating Diagrams

Created new Diagram
Double-click new Model
    > Name new model
        - relational_db -
    > Click "Add New Schema"

Click on small window "Place a new table" (under the tree button)
- Name Table "users"
    
    > first and most important Table is always<

            >  'id'  <  (data type is 'int')
                        (AI - Auto Increment)
                        (PK - Primary Key)
                        (NN - Not Null)

Always save the "mwb" file


'''


# -------------- Normalization ------------------#

# The breaking down and parsing of information to keep from repeating info

'''

Dan Manson - 556 Fake St, Faketown, CA

becomes >

--------------------------------
id | Dan | Manson | (Foriegn ID)
--------------------------------
id | 556 Fake St | Faketown | CA
--------------------------------

'''





# ------------------------ FORWARD ENGINEERING-------------------------------

# Forward Engineering a database from a ERD


