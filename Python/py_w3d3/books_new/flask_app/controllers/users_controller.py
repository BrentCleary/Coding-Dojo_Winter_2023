from flask_app import app
from flask import render_template, redirect, request, session, flash

from flask_app.models.users_model import Users

from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)



# ======================LOGIN AND REGISTER=======================

# ------------- LOGIN AND REGISTER - DISPLAY -------------

@app.route('/')
def hello_world():
    return render_template('index.html')


# ------------- LOGIN AND REGISTER - ACTION -------------
@app.route('/create', methods=['post'])
def create():
    data = request.form
    print(request.form)
    
    if not Users.validate(data):
        return redirect('/')
    
    # 1 Hash the Password
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    # 2 get the data dict ready with a new hashed pw to create a User
    data = {
        **request.form, 
        'password' : pw_hash
    }
    # 3 Pass it to the User Model
    user_id = Users.Create_User(data)
    
    session['user_id'] = user_id

    # !!!!!!!!!!!!!!!!

    # Redirect to user dashboard, or login landing page
    return redirect('/dashboard')

    # !!!!!!!!!!!!!!!!!!!!

# ------------- LOGIN ACTION -------------
@app.route('/users/login', methods=['post'])
def login_user():
    data = {
        'email' : request.form['email']
    }
    user_in_db = Users.Get_By_Email(data) # returns false or a User
    if not user_in_db:
        flash('invalid email')
        return redirect('/')
    # Now check the password
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash('invald password')
        return redirect('/')

    # if all is good
    session['user_id'] = user_in_db.id

    # !!!!!!!!!!!!!!!!

    # Redirect to user dashboard, or login landing page
    return redirect('/dashboard')

    # !!!!!!!!!!!!!!!!!!!!








# ------------- LOGOUT PAGE RENDER -------------
@app.route('/logout')
def logout_user():
    session.clear()
    return redirect('/')


