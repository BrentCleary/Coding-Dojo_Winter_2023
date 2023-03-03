from flask import Flask, render_template, redirect, request, session
app = Flask(__name__)
app.secret_key = 'secret1'
# our index route will handle rendering our form

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def process():
    session['fullname'] = request.form['fullname']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    print(session['fullname'])
    print(session['location'])
    print(session['language'])
    print(session['comment'])
    return redirect ('/result')

@app.route('/result')
def result():
    surveyResults = session
    return render_template('submitted_info.html', surveyResults=surveyResults)

if __name__ == "__main__":
    app.run(debug=True)

