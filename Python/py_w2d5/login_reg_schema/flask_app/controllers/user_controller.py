import flask_app import app
from flask_app import render_template, redirect, request
from flask_app.models.user_model import User



#  REGISTER - ACTION METHOD - MUST REDIRECT
@app.route('/users/register', methods=['post', 'get'])
def user_reg():

    print(request.form)
    if not User.validate(request.form):
        return redirect('/')

    return redirect('/')




