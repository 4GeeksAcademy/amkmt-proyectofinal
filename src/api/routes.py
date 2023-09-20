"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint,  current_app  
from api.models import db, User, Products
from api.utils import generate_sitemap, APIException
import json 
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

import cloudinary.uploader as uploader

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/signup", methods=["POST"])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    address = request.json.get("address", None)
    name = request.json.get("name", None)
    username = request.json.get("username", None)
    age = request.json.get("age", None)
    city = request.json.get("city", None)
    phone = request.json.get("phone", None)
    existing_email = User.query.filter_by(email=email).first()
    if existing_email:
        return jsonify({"msg": "email already exists"}), 400
    new_user = User(username=username, password=password, address=address,
                    name=name, age=age, city=city, phone=phone, email=email, is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"user_id": new_user.id}), 200

## Muestra todos los productos
@api.route("/products", methods=["GET"])
def getProducts():
    products = Products.query.all()
    results = list(map(lambda x: x.serialize(), products ))
    print (results)
    return jsonify(results), 200

## Crea un producto
@api.route("/products", methods=["POST"])
def addProducts():
    data_files=request.files
    data_form=request.form
    data={
        "price":data_form.get("price"),
         "name":data_form.get("name"),
         "description":data_form.get("description"),
         "image":data_files.get("image")
        }
    response_image=uploader.upload(data.get("image"))
    data.update({
        "image":response_image.get("url")

    })
    product= Products(data) 
    db.session.add(data)
    try:
        db.session.commit()
        return jsonify({
            "msg":"producto guardado exitosamente"
        }) , 201
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "msg":"error al guardar producto"
        }) , 500

    body=json.loads(request.data)
    queryNewproducts=Products.query.filter_by(name=body["name"].first())
    if queryNewproducts is None:
        new_products=Products(name=body["name"], 
        image=body["image"],
        description=body["description"],
        price=body["price"]
        )
        db.session.add(new_products)
        db.session.commit()
        response_body={
            "msg":"new product added"
        }
        return jsonify(new_products.serialize()), 200
    response_body={
            "msg":"product already created"
        }
    return jsonify(response_body), 400


@api.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)

        if email is "test" or password is "test":
            return jsonify("You need an email and a password"), 400
        else:
            user = User.query.filter_by(email=email).one_or_none()
            if user is None:
                return jsonify({"message": "Bad credentials"}), 400
            else:
                if check_password(user.password, password, user.salt):
                    token = create_access_token(identity=user.id)
                    return jsonify({"token": token}), 200
                else:
                    return jsonify({"message": "Bad credentials"}), 400
    
    access_token = create_access_token(identity =email)
    return jsonify(access_token= access_token)

@api.route('/user/upload-image', methods=['PUT'])
@jwt_required()
def handle_upload():


    # validate that the front-end request was built correctly
    if 'profile_image' in request.files:
        print()
        # upload file to uploadcare
        result = current_app.cloudinary.uploader.upload(request.files['profile_image'])
        print(result)

        #obtain user identity
        identity = get_jwt_identity()
        print(identity)

        # fetch for the user
        user1 = User.query.filter_by(identity).first()
        # update the user with the given cloudinary image URL
        user1.profile_image_url = result['secure_url']

        db.session.add(user1)
        db.session.commit()

        return jsonify(user1.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')



# @api.route('/signup', methods=["POST"])
# def signup ():
#     request_body = request.get_json()
#     email=
#     address=
#     name=
#     username=
#     age=
#     city=
#     phone=
#     body = request.get_json()
#     email = body["email"]
#     password = body["passworef user_register():d"]
#     is_active = True

#     if body is None:
#         raise APIException("Body está vacío", status_code=400)
#     if email is None or email=="":
#         raise APIException("El email es necesario", status_code=400)
#     if password is None or password=="":
#         raise APIException("El password es necesario", status_code=400)

#     user = User.query.filter_by(email=email).first()



