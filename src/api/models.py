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
    username = db.Column(db.String(150), nullable=False)
    age = db.Column(db.String(150), nullable=False)
    city = db.Column(db.String(150), nullable=False)
    phone = db.Column(db.String(150), nullable=False)
    salt = db.Column(db.String(180), nullable=False)

    reserva = db.relationship("Reservas", backref="user", lazy=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "address": self.address,
            "name": self.name,
            "username": self.username,
            "profile_image_url": self.profile_image_url,
            "age": self.age,
            "city": self.city,
            "phone": self.phone,
            "reservas": [reservas.serialize() for reservas in self.reserva]
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
            "image": self.image,
            "price": self.price,
            "description": self.description,
        }


class Reservas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reservacion_date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    reservacion_hour = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f'<Reservas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            # Formatea la fecha como una cadena
            "reservacion_date": self.reservacion_date.strftime("%Y-%m-%d %H:%M:%S"),
            "user_id": self.user_id
        }


class TokenBlocked(db.Model):
    __tablename__ = "tokenblocked"
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(200), unique=False, nullable=False)
    email = db.Column(db.String(200), unique=False, nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "token": self.token,
            "date": self.date
            # do not serialize the password, its a security breach
        }
