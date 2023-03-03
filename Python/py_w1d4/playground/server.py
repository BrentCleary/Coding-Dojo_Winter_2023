from flask import Flask, render_template 
app = Flask(__name__)    


# Pair Programmed with Anthony Winn (and one other person I can't recall  :/  )

# ---- Level 1 ----
@app.route('/play')
def play():
    return render_template("index.html", num=3, color="cornflowerblue" )


# ---- Level 2 ----
@app.route('/play/<int:num>')
def playmore(num):
    return render_template("index.html",num=num, color="cornflowerblue" )


# ---- Level 3 ----
@app.route('/play/<int:num>/<string:color>')
def playMoreColor(num, color):
    return render_template("index.html",num=num, color=color )
    

if __name__=="__main__":   
    app.run(debug=True)    

