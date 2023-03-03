from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key = 'secret'

@app.route('/')
def index():
    if not 'gameNumber' in session:
        session['gameNumber'] = random.randint(1,100)
    print(f"random number is:" + str({session['gameNumber']}) + "SHHHHHHHHHH" )
    
    # variable for updating box color on guesses
    boxcolor = ''

    # display results of guess
    guessResults = {
        'start' : '?',
        'tooHigh': 'Too High!',
        'tooLow' : 'Too Low!', 
        'correct' : str(session['gameNumber']) + " was the number!"
    }
    # Start of game (no guesses yet)
    if not session['guess'] in session:
        guessResults['key'] = guessResults['start']
        boxcolor = "black"
        showbox = "hidden"
    # Correct guess
    if session['guess'] == session['gameNumber']:
        guessResults['key'] = guessResults['correct'];
        boxcolor = 'green'
        print(f'Session = Guess ' + str(guessResults['correct']))
    # Number too high
    if session['guess'] > session['gameNumber']:
        guessResults['key'] = guessResults['tooHigh'];
        boxcolor = 'red'
        print(f'Session = Guess ' + str(guessResults['correct']))
    # Number too low
    if session['guess'] < session['gameNumber']:
        guessResults['key'] = guessResults['tooLow'];
        boxcolor = 'red'
        print(f'Session = Guess ' + str(guessResults['correct']))

    return render_template("index.html", boxstatus=showbox, color=boxcolor, guessResults=guessResults['key'])

# Converts request form input to int
# Compares int to number stored in session['gameNumber']
@app.route('/guess', methods=['post'])
def guess():
    session['guess'] = int(request.form['guess'])
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)

