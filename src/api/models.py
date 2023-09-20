from flask_sqlalchemy import SQLAlchemy
# from datatime import datatime 
# from enun import Enum
# app = Flask(__name__)
db = SQLAlchemy()
# class UserGender(Enum):
#     MALE= "male"
#     FEMALE= "female"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    profile_image_url = db.Column(db.String(255), unique=False, nullable=True)
    address= db.Column(db.String(255),nullable=False) 
    name= db.Column(db.String(150), nullable=False)
    username= db.Column(db.String(150), nullable=False)
    age= db.Column(db.String(150), nullable=False)
    city= db.Column(db.String(150), nullable=False)
    phone= db.Column(db.String(150), nullable=False)
    # created_at = db.Column(db.DateTime(timezone=True), default=db.func.now(), nullable=False)
    # updated_at = db.Column(db.DateTime(timezone=True), default=db.func.now(), onupdate=db.func.now(), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "address": self.address,
            "name": self.name,
            "username": self.username,
            "profile_image_url":self.profile_image_url,
            "age": self.age,
            "city": self.city,
            "phone": self.phone,
            # do not serialize the password, its a security breach
        }
    
class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    product_image_url= db.Column(db.String(255),nullable=False) 
    price= db.Column(db.String(150), nullable=False)
    description= db.Column(db.String(400), nullable=False)
    
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
    
# class Payments(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name= db.Column(db.String(120), nullable=False)
#     card_number = db.Column(db.String(120), nullable=False)
#     amount= db.Column(db.String(255),nullable=False) 
#     validity= db.Column(db.String(150), nullable=False)
#     cvv = db.Column(db.String(120), nullable=False)
#     mail= db.Column(db.String(400), nullable=False)

#     def __repr__(self):
#         return f'<Payments {self.id}>'
    
#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "card_number": self.card_number,
#             "amount": self.amount,
#             "validity": self.validity,
#             "cvv":self.cvv,
#             "mail": self.mail,
#         }