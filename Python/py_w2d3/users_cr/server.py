from flask import Flask, render_template, redirect, request
app = Flask(__name__)
from users import Users


# our index route will handle rendering our form


# --------- SHOW ALL User Page 
@app.route('/')
def index():

    all_users = Users.get_all()

    return render_template("read_all.html", 
                            all_users=all_users)


# --------- SHOW ONE User Page
@app.route('/users/<int:id>/show')
def ShowOneUser(id):
    id = {'id': id}
    one_user = Users.ShowOne(id)
    return render_template("show_one.html", 
                            one_user=one_user)



# ==========================================================
# --------- CREATE User Page
@app.route('/create')
def Create_User():

    return render_template("create.html")

# -------- Create User ACTION
@app.route('/process', methods=['post'])
def NewUser():

    Users.Create(request.form)
    return redirect ('/')

# ==========================================================
# ----------------------- Update ---------------------------

# ---------------Update - Render - Page--------------------
@app.route('/users/edit/<int:id>/')
def EditUser(id):
    user_id = {"id" : id}
    one_user = Users.ShowOne(user_id)
    return render_template("edit.html", one_user=one_user)


# -------- UPDATE User ACTION
@app.route('/users/update/<int:id>', methods=['post'])
    # The route is the path called on the form for POST when the submit button is pressed
def UpdateUser(id):
    user_id = {**request.form, 'id': id}
    Users.Update(user_id)

    return redirect(f'/users/{id}/show')


# -------- DELETE User ACTION
@app.route('/users/delete/<int:id>')
def DeleteUser(id):
    Users.Delete(id)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)

