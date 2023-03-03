from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "secretpassword"


# ------------
# This renders the form and passes post form info to the process route
# ------------
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def form():
    return render_template("form.html")


# ------------
# This route reponds to the "/process" form action="/process" in the html
'''
-----------------------THIS IS AN ACTION ROUTE
----------!!!!!!!! NEVER EVER EVER EVER RENDER ON A POST!!!!!!!!
'''
# ------------
@app.route('/process', methods=['post'])
def process_form():
    print("form submitted")
    print(f'===========\n\n {request.form}\n\n =============')
    print(f"dog_name: {request.form['name']}")
    name = request.form['name']
    age = request.form['age']
    
    # session
    session['name'] = request.form['name']
    session['age'] = request.form['age']
    session['breed'] = request.form['breed']
    
    
    return render_template("display.html",
                            name=name, 
                            age=age,
                            breed= request.form['breed'])

# @app.route('/display')
# def display():
#     return render_template("display.html")


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

