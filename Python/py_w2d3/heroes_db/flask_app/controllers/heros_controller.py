from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.superhero_model import Hero

# -----------------------READ ALL - RENDER / VIEW ---------------------
@app.route('/')
def index():
    all_heroes = Hero.get_all()
    return render_template("index.html",
                            all_heroes=all_heroes)


# -------------------- CREATE PAGE - RENDER --------------------
    # table_name / id / action
@app.route('/heroes/new')
def New_Hero():
    return render_template("hero_new.html")


# -------------------- CREATE PAGE - method - ACTION --------------------
@app.route('/heroes/create', methods=['post'])
def Create_Hero():
    print(f'\n\n====={request.form}========\n\n')
    Hero.Create(request.form)
    
    return redirect('/')


# # -------------------- READ ONE - RENDER
# @app.route('/heroes/<int:id>/show')