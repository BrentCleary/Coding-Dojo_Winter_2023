from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import users_model
from flask_app.models import characters_model
from flask import flash
from flask_app import DATABASE


class Class:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.attack = data['attackpower']
        self.skill = data['skillpower']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

