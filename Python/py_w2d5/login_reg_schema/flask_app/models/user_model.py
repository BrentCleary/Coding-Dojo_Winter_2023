from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app import Flash

# FLASH - Will show data for one redirect

#  FORM VALIDATION
@staticmethod
def validate_user(data):
    is_valid = True # we assume data is true

    if len(data['first_name'] < 1):
        is_valid = False
        flash("name must be at least 3 characters.")

    if len(data['last_name'] < 1):
        is_valid = False
        flash("name must be at least 3 characters.")

    if len(data['email'] < 7):
        is_valid = False
        flash("name must be at least 3 characters.")

    if len(data['password'] < 3):
        is_valid = False
        flash("Password required")

    elif not (data[password] == data(confirm_password)):
        is_valid = False
        flash("passwords must match")

    return is_valid