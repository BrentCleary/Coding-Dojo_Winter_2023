
# Import Flask from flask (must be installed in folder with "pipenv install flask")
# app is called in server.py to run flask server for routes
from flask import Flask
app = Flask(__name__)
app.secret_key = "secret"