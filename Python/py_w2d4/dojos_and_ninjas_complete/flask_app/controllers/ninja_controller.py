
from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.ninja_model import Ninja
from flask_app.models.dojo_model import Dojos


# ------------- Create NINJA - RENDER Route -------------
# Route displays page and calls up Dojo info
@app.route('/ninja/display')
def create_ninja_display():
    # calls on Dojo Class to populate Dojo Selection (dojo.name/dojo.id)
    all_dojos = Dojos.get_all_dojos()
    return render_template('create_ninja.html', all_dojos=all_dojos)


# ------------- Create NINJA - ACTION Route -------------
# Calls on Ninja model/create method, and posts to MySQL
@app.route('/ninjas/create', methods=['post'])
def create_ninja():
    print(request.form)
    id = request.form['dojo_id']
    Ninja.Create_New_Ninja(request.form)
    return redirect(f'/dojos/{id}')