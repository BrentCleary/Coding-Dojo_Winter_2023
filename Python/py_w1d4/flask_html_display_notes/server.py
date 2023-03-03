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
    

@app.route('/lists')
def render_lists():
    # Soon enough, we'll get data from a database, but for now, we're hard coding data
    student_info = [
        {'name' : 'Michael', 'age' : 35},
        {'name' : 'John', 'age' : 30 },
        {'name' : 'Mark', 'age' : 25},
        {'name' : 'KB', 'age' : 27}
    ]
    return render_template("lists.html", random_numbers = [3,1,5], students = student_info)




if __name__=="__main__":   
    app.run(debug=True)    

