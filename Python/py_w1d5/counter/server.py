from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)    
app.secret_key = 'justasecret'


@app.route('/')          
def VisitCounter():

    # Sensei Bonus 2
    if not 'actualVisit' in session:
        session['actualVisit'] = 1;
    else:
        session['actualVisit'] += 1;
    
    if not 'visit' in session:
        session['visit'] = 1
    else:
        session['visit'] += 1
    return render_template("index.html")

# Ninja Bonus
    # Adds 1 to session visit + the visit form the VisitCounter Method
@app.route('/add2')          
def AddVisits():
    session['visit'] += 1
    return redirect('/')


# Sensei Bonus 1
    # Takes in request.form action="formsubmission", method="post"
    # takes in value of <input type="text" name="custom">
    # converts string input to integer, adds it to session['visit'], subtracts 1 for 
@app.route('/formsubmission', methods=['post'])          
def FormSubmission():
    print(f"-----{request.form}------")
    session['visit'] += (int(request.form['custom'])) - 1
    return redirect('/')

# Ninja Bonus 2
    # Redirect - redirects to render template
    # Clears Session
@app.route('/redirect')
def ClearVisits():
    session['visit'] = 0
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)


