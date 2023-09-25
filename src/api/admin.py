
import os
from flask_admin import Admin
<<<<<<< HEAD
from .models import db, User, Products, Reservas
=======
from .models import db, User, Products, Reservas, TokenBlocked
>>>>>>> fdf5b26fa82ae9e445ed716dc15795b5863fc779
from flask_admin.contrib.sqla import ModelView


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Products, db.session))
    admin.add_view(ModelView(Reservas, db.session))
    admin.add_view(ModelView(TokenBlocked, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
