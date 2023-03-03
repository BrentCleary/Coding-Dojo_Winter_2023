# IMPORT app from flask_app (__init__.py)
from flask_app import app

# IMPORT CONTROLLERS FOR ROUTES
from flask_app.controllers import users_controller
from flask_app.controllers import sightings_controller

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.