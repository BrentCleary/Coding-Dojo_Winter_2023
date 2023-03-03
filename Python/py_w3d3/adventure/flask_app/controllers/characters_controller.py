from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.characters_model import Characters
from flask_app.models.users_model import Users



# ====================== SHOW ALL characters - DISPLAY Route =======================

@app.route('/dashboard')
def show_all_characters():

    # ! route guard
    if 'user_id' not in session:
        return redirect('/')

    #grab the user_id from session
    data = {'id' : session['user_id'] }
    logged_user = Users.Get_User_By_ID(data)


    all_characters = Characters.Get_All_characters()
    
    return render_template("characters_display.html", all_characters=all_characters, logged_user=logged_user)



# # ====================== SHOW ONE characters - DISPLAY Route=======================

# @app.route('/characters/<int:id>')
# def show_single_character(id):
#     data = {'id' : id }
#     single_characters = characters.Get_One_characters(data)
#     user_id = {'id' :single_characters.user_id}
#     creator_id = Users.Get_User_By_ID(user_id)

#     return render_template("one_characters.html", single_characters=single_characters, creator_id=creator_id)



# # ====================== Create characters - DISPLAY Route=======================

# @app.route('/characters/new')
# def create_new_characters():
#     return render_template('create_characters.html')



# # ====================== Create characters - ACTION Route=======================

# @app.route('/characters/create', methods=['post'])
# def create_characters():
#     print(request.form)
#     if not characters.characters_validator(request.form):
#         return redirect('/characters/new')

#     characters_data = {
        # **request.form,
#         'user_id': session['user_id']
#         }

#     characters.Create_characters(characters_data)

#     return redirect('/characters')




# # ====================== UPDATE characters - ACTION Route=======================

# # ------------------------Display Edit -------------------------------

# @app.route('/edit/<int:id>')
# def Edit_characters(id):
#     # Call Read One characters Function
#     data = {'id': id}
#     current_characters = characters.Get_One_characters(data)

#     return render_template('edit_characters.html', current_characters=current_characters)

# # -----------------------Submit Edit - Process

# @app.route('/edit_characters/<int:id>', methods=['post'])
# def Edit_characters_Submit(id):
#     if not characters.characters_validator(request.form):
#         return redirect(f'/edit/{id}')
#     data = {**request.form, 'id': id, 'user_id': session['user_id']}
#     print(data)
#     characters.Edit_characters(data)
#     return redirect('/characters')




# # =========================== DELETE characters ===================================

# @app.route('/delete/<int:id>')
# def delete_characters(id):
#     data = {'id' : id}
#     characters.Delete_characters(data)
#     return redirect ("/characters")