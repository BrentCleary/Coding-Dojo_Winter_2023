from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.recipes_model import Recipe
from flask_app.models.users_model import Users



# ====================== SHOW ALL RECIPES - DISPLAY Route =======================

@app.route('/recipes')
def show_all_recipes():

    # ! route guard
    if 'user_id' not in session:
        return redirect('/')

    #grab the user_id from session
    data = {'id' : session['user_id'] }
    logged_user = Users.Get_User_By_ID(data)


    all_recipes = Recipe.Get_All_Recipes()
    
    return render_template("recipes_display.html", all_recipes=all_recipes, logged_user=logged_user)



# ====================== SHOW ONE RECIPES - DISPLAY Route=======================

@app.route('/recipes/<int:id>')
def show_single_recipe(id):
    data = {'id' : id }
    single_recipe = Recipe.Get_One_Recipe(data)
    user_id = {'id' :single_recipe.user_id}
    creator_id = Users.Get_User_By_ID(user_id)

    return render_template("one_recipe.html", single_recipe=single_recipe, creator_id=creator_id)



# ====================== Create RECIPES - DISPLAY Route=======================

@app.route('/recipes/new')
def create_new_recipe():
    return render_template('create_recipe.html')



# ====================== Create RECIPES - ACTION Route=======================

@app.route('/recipes/create', methods=['post'])
def create_recipe():
    print(request.form)
    if not Recipe.Recipe_validator(request.form):
        return redirect('/recipes/new')

    recipe_data = {
        **request.form,
        'user_id': session['user_id']
        }

    Recipe.Create_Recipe(recipe_data)

    return redirect('/recipes')




# ====================== UPDATE RECIPES - ACTION Route=======================

# ------------------------Display Edit -------------------------------

@app.route('/edit/<int:id>')
def Edit_Recipes(id):
    # Call Read One Recipe Function
    data = {'id': id}
    current_recipe = Recipe.Get_One_Recipe(data)

    return render_template('edit_recipe.html', current_recipe=current_recipe)

# -----------------------Submit Edit - Process

@app.route('/edit_recipe/<int:id>', methods=['post'])
def Edit_Recipes_Submit(id):
    if not Recipe.Recipe_validator(request.form):
        return redirect(f'/edit/{id}')
    data = {**request.form, 'id': id, 'user_id': session['user_id']}
    print(data)
    Recipe.Edit_Recipe(data)
    return redirect('/recipes')




# =========================== DELETE RECIPE ===================================

@app.route('/delete/<int:id>')
def delete_recipe(id):
    data = {'id' : id}
    Recipe.Delete_Recipe(data)
    return redirect ("/recipes")