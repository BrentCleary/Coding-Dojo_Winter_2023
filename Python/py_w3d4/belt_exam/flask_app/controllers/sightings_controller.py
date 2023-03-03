from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.sightings_model import Sighting
from flask_app.models.users_model import Users



# ====================== SHOW ALL sightings - DISPLAY Route =======================

@app.route('/dashboard')
def show_all_sightings():

    # ! route guard
    if 'user_id' not in session:
        return redirect('/')

    #grab the user_id from session
    data = {'id' : session['user_id'] }
    logged_user = Users.Get_User_By_ID(data)

    all_sightings = Sighting.get_all_sightings()
    
    return render_template("sightings_display_all.html", all_sightings=all_sightings, logged_user=logged_user)



# ====================== SHOW ONE sightings - DISPLAY Route=======================

@app.route('/sightings/<int:id>')
def show_single_sighting(id):
    data = {'id' : id }
    single_sighting = Sighting.get_one_sighting(data)
    user_id = {'id' :single_sighting.user_id}
    creator_info = Users.Get_User_By_ID(user_id)

    current_user_id = {'id' : session['user_id'] }
    logged_user = Users.Get_User_By_ID(current_user_id)

    return render_template("display_one.html", single_sighting=single_sighting, creator_info=creator_info, logged_user=logged_user)



# ====================== Create sightings - DISPLAY Route=======================

@app.route('/sightings/new')
def create_new_sighting():

    current_user_id = {'id' : session['user_id'] }
    logged_user = Users.Get_User_By_ID(current_user_id)

    return render_template('create_one.html', logged_user=logged_user)



# ====================== Create sightings - ACTION Route=======================

@app.route('/sightings/create', methods=['post'])
def create_sighting():
    print(request.form)
    if not Sighting.sighting_validator(request.form):
        return redirect('/sightings/new')

    sighting_data = {
        **request.form,
        'user_id': session['user_id']
        }

    Sighting.create_sighting(sighting_data)

    return redirect('/dashboard')




# ====================== UPDATE sightings - ACTION Route=======================

# ------------------------Display Edit -------------------------------

@app.route('/edit/<int:id>')
def edit_sightings_display(id):
    # Call Read One sighting Function
    data = {'id': id}
    current_sighting = Sighting.get_one_sighting(data)

    current_user_id = {'id' : session['user_id'] }
    logged_user = Users.Get_User_By_ID(current_user_id)

    return render_template('edit_one.html', current_sighting=current_sighting, logged_user=logged_user)

# -----------------------Submit Edit - Process

@app.route('/edit_sighting/<int:id>', methods=['post'])
def edit_sightings_submit(id):
    if not Sighting.sighting_validator(request.form):
        return redirect(f'/edit/{id}')
    data = {**request.form, 'id': id, 'user_id': session['user_id']}
    print(data)
    Sighting.edit_sighting(data)
    return redirect('/dashboard')




# =========================== DELETE sighting ===================================

@app.route('/delete/<int:id>')
def delete_sighting(id):
    data = {'id' : id}
    Sighting.delete_sighting(data)
    return redirect ("/dashboard")