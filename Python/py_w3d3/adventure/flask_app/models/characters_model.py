from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import users_model
from flask import flash
from flask_app import DATABASE


class Character:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.experience = data['experience']
        self.level = data['level']
        self.gold = data['gold']
        self.attackpower = data['attackpower']
        self.skillpower = data['skillpower']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.class_id = data['class_id']



    @classmethod
    def