from flask import Flask
app = Flask(__name__, static_folder='app', static_url_path="/app")

# 1
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response

# 2
@app.route('/dojo')          # The "@" decorator associates this route with the function immediately following
def dojo():
    return 'Dojo!'  # Return the string 'Hello World!' as a response

# 3
@app.route('/say/<string:name>')          # The "@" decorator associates this route with the function immediately following
def name(name):
    return name  # Return the string 'Hello World!' as a response

# 4
@app.route('/repeat/<int:num>/<string:name>')          # The "@" decorator associates this route with the function immediately following
def repeat(num, name):
    return num * (name + " ")  # Return the string 'Hello World!' as a response


# Sensei Bonus
# Uncompleted - Moved onto next assignment
# Search online for setting up default routes
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file("index.html")






if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

