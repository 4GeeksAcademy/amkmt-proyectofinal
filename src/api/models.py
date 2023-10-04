from flask_sqlalchemy import SQLAlchemy
import datetime
# from datatime import datatime
# from enun import Enum
# app = Flask(__name__)
db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(150), nullable=False)
    phone = db.Column(db.String(150), nullable=False)
    salt = db.Column(db.String(180), nullable=False)
    admin = db.Column(db.Boolean, unique=False, default=False)
    reserva = db.relationship("Reservas", backref="user", lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "address": self.address,
            "name": self.name,
            "phone": self.phone,
            "reservas": [reservas.serialize() for reservas in self.reserva],
            "admin": self.admin,
            # do not serialize the password, its a security breach
        }


class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    product_image_url = db.Column(db.String(255), nullable=False)
    price = db.Column(db.String(150), nullable=False)
    description = db.Column(db.String(400), nullable=False)
    

    def __repr__(self):
        return f'<Products {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.product_image_url,
            "price": self.price,
            "description": self.description,
        }


class Reservas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reservacion_date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    cantidad_personas = db.Column(db.Integer, nullable=False)
    # Elimina el back_populates
    user_reserva = db.relationship("User")
    def __repr__(self):
        return f'<Reservas {self.id}>'
    def serialize(self):
        return {
            "id": self.id,
            "reservacion_date": self.reservacion_date.strftime("%Y-%m-%d %H:%M:%S"),
            "user_name": self.user.name,
            "user_email": self.user.email,
            "cantidad_personas": self.cantidad_personas,
        }


class TokenBlocked(db.Model):
    __tablename__ = "tokenblocked"
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(200), unique=False, nullable=False)
    email = db.Column(db.String(200), unique=False, nullable=False)
    date = db.Column(db.DateTime, nullable=False,
                     default=datetime.datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "token": self.token,
            "date": self.date
            # do not serialize the password, its a security breach
        }
