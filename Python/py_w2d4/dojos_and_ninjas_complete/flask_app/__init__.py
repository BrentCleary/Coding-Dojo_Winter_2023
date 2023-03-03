# ??????? Why do we import

# from flask_app import app
# and not
# from flask_app.__init__ import app?
# possible this question will be answered by the time this assignment is graded

from flask import Flask
app = Flask(__name__)
app.secret_key = "secret"
