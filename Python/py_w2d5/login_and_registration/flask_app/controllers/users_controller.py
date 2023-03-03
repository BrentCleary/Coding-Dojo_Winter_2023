from flask_app import app
from flask import render_template, redirect, request, session
from flask_bcrypt import Bcrypt
from flask import flash
bcrypt = Bcrypt(app)
from flask_app.models.users_model import Users


# ------------- LOGIN AND REGISTER Home ROUTE -------------

@app.route('/')
def registration_page():
    return render_template('index.html')



# ------------- REGISTERATION ROUTE PAGE -------------
@app.route('/create/user', methods=['post'])
def create_user():
    print(request.form)
    if not Users.validate(request.form):
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
    
    # how do we keep track if someone is logged in
    # store the user_id of the created user in session
    session['user_id'] = user_id

    return redirect('/dashboard')

# ------------- DASHBOARD PAGE RENDER -------------
@app.route('/dashboard')
def dashboard_route():

    # Checks if returned 'key' is in session, and reroutes to login/reg page if not
    # ! route guard
    if 'user_id' not in session:
        return redirect('/')



    #grab the user_id from session
    data = {'id' : session['user_id'] }
    logged_user = Users.Get_By_Id(data)
    return render_template("welcome.html", logged_user=logged_user)


# ------------- LOGIN ACTION -------------
@app.route('/users/login', methods=['post'])
def login_user():
    data = {
        'email' : request.form['email']
    }
    user_in_db = Users.Get_By_Email(data) # returns false or a User
    if not user_in_db:
        flash('invald credentials')
        return redirect('/')
    # Now check the password
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash('invald credentials')
        return redirect('/')

    # if all is good

    session['user_id'] = user_in_db.id
    return redirect ('/dashboard')




# ------------- LOGOUT PAGE RENDER -------------
@app.route('/logout')
def logout_user():
    session.clear()
    return redirect('/')