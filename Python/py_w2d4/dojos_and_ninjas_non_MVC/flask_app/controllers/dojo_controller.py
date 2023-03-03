from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojo_model import Dojos


# Redirects Landing Page to '/dojos'
@app.route('/')
def go_to_dojos():
    return redirect('/dojos')


# ------------- DISPLAY All Dojos Route -------------
@app.route('/dojos')
def get_all_dojos():

    all_dojos = Dojos.get_all_dojos()

    return render_template("index.html", all_dojos=all_dojos)


# ------------- Create Dojo ACTION -------------

@app.route('/create_dojo', methods=['post'])
def create_new_dojo():

    Dojos.Create_Dojo(request.form)

    return redirect('/')



# ------------- Show Ninjas DISPLAY -------------

# @app.route('/dojos/<int:dojo_id')
@app.route('/dojos/<int:id>')
def show_ninjas(id):
    data = {'id' : id}
    this_dojo = Dojos.Join_Dojos_And_Ninjas(data)

    return render_template('ninjas_display.html', this_dojo = this_dojo)