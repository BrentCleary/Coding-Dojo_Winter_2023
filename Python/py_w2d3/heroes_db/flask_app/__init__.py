from flask import Flask, render_template, redirect, request
app = Flask(__name__)
from superhero_model import Hero

DATABASE = "superheroes_db"