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
    
# Carrito de compras
class ShoppingCart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    idCarrito = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    #Productos
    products_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    cantidad = db.Column(db.Integer, nullable=False)
    precio = db.Column(db.Integer, nullable=False)
    def __repr__(self):
        return f'<ShoppingCart {self.id}>'
    def serialize(self):
        return {
            "id": self.id,
            "idCarrito": self.idCarrito,
            "user_id":self.user_id,
            "products_id":self.products_id,
            "cantidad": self.cantidad,
            "precio": self.precio
        }
    def serializeProductos(self):
        results = Products.query.filter_by(id = self.products_id).first()
        return {
            "productInfo": results.serialize(),
        }
    
# class Payments(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     full_name= db.Column(db.String(120), nullable=False)
#     card_number = db.Column(db.String(120), nullable=False)
#     amount= db.Column(db.String(255),nullable=False) 
#     validity= db.Column(db.String(150), nullable=False)
#     cvv = db.Column(db.String(120), nullable=False)
#     email= db.Column(db.String(400), nullable=False)

#     def __repr__(self):
#         return f'<Payments {self.id}>'
    
#     def serialize(self):
#         return {
#             "id": self.id,
#             "full_name": self.full_name,
#             "card_number": self.card_number,
#             "amount": self.amount,
#             "validity": self.validity,
#             "cvv":self.cvv,
#             "email": self.email,
#         }