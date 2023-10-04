"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from base64 import b64encode
from flask import Flask, request, jsonify, url_for, Blueprint,  current_app
from api.models import db, User, Products, TokenBlocked, Reservas
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity, get_jwt
from flask_jwt_extended import jwt_required
from datetime import datetime
import json
import cloudinary.uploader as uploader

# SDK de Mercado Pago
import mercadopago
# Agrega credenciales
sdk = mercadopago.SDK(
    "APP_USR-2815099995655791-092911-c238fdac299eadc66456257445c5457d-1160950667")
api = Blueprint('api', __name__)


def set_password(password, salt):
    return generate_password_hash(f"{password}{salt}")


def check_password(hash_password, password, salt):
    return check_password_hash(hash_password, f"{password}{salt}")


def verifyToken(jti):
    search = TokenBlocked.query.filter_by(token=jti).first()

    if search == None:
        return True  # para este caso el token no estaría en la lista de bloqueados
    else:
        return False  # para este caso el token no estaría en la lista de bloqueados


@api.route('/auth', methods=['GET'])
@jwt_required()
def auth():

    verification = verifyToken(get_jwt()["jti"])
    if verification == False:
        return jsonify({"message": "forbidden"}), 403
    user_data = get_jwt_identity()
    user = User.query.get(user_data["id"])
    if user is None:
        return jsonify({"message": "not found"}), 404

    response_body = {
        "user": user.serialize()
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=["POST"])
def signup():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    address = request.json.get("address", None)
    name = request.json.get("name", None)
    phone = request.json.get("phone", None)
    salt = b64encode(os.urandom(32)).decode('utf-8')
    password = set_password(password, salt)
    existing_email = User.query.filter_by(email=email).first()
    if existing_email:
        return jsonify({"msg": "email already exists"}), 400
    new_user = User(password=password, address=address,
                    name=name, phone=phone, email=email, salt=salt)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"user_id": new_user.id}), 200

# Muestra todos los productos


@api.route("/products", methods=["GET"])
def getProducts():
    products = Products.query.all()
    results = list(map(lambda x: x.serialize(), products))
    print(results)
    return jsonify(results), 200

# Crea un   producto


@api.route("/products", methods=["POST"])
# @jwt_required(required_rol=['admin'])
def addProducts():
    data_files = request.files
    data_form = request.form
    data = {
        "price": data_form.get("price"),
        "name": data_form.get("name"),
        "description": data_form.get("description"),
        "image": data_files.get("image")
    }
    response_image = uploader.upload(data.get("image"))
    data.update({
        "image": response_image.get("url")
    })
    product = Products(
        name=data.get("name"),
        price=data.get("price"),
        description=data.get("description"),
        product_image_url=data.get("image")
    )
    db.session.add(product)
    try:
        db.session.commit()
        return jsonify({
            "msg": "producto guardado exitosamente"
        }), 201
    except Exception as error:
        db.session.rollback()
        return jsonify({
            "msg": "error al guardar producto"
        }), 500
# if 'admin' in claims['roles']:
#         # Aquí puedes permitir que los usuarios administradores creen productos
#         return jsonify({"message": "Producto creado exitosamente"}), 200
#     else:
#         return jsonify({"error": "Acceso no autorizado"}), 403

    body = json.loads(request.data)
    queryNewproducts = Products.query.filter_by(name=body["name"]).first()
    if queryNewproducts is None:
        new_products = Products(name=body["name"],
                                image=body["image"],
                                description=body["description"],
                                price=body["price"]
                                )
        db.session.add(new_products)
        db.session.commit()
        response_body = {
            "msg": "new product added"
        }
        return jsonify(new_products.serialize()), 200
    response_body = {
        "msg": "product already created"
    }
    return jsonify(response_body), 400

# Ruta para actualizar un producto (PUT)
@api.route("/products/<int:id>", methods=["PUT"])
def updateProduct(id):
    # Buscar el producto por su ID
    product = Products.query.get(id)

    # Si el producto no se encuentra, devolver un error 404
    if not product:
        return jsonify({"error": "Producto no encontrado"}), 404

    # Obtener los datos enviados en la solicitud JSON
    data = request.form

    # Actualizar los campos del producto si se proporcionan en la solicitud
    if "name" in data:
        product.name = data["name"]
    if "product_image_url" in data:
        product.product_image_url = data["product_image_url"]
    if "price" in data:
        product.price = data["price"]
    if "description" in data:
        product.description = data["description"]

    # Guardar los cambios en la base de datos
    db.session.commit()

    # Devolver una respuesta de éxito
    return jsonify({"message": "Producto actualizado exitosamente"}), 200

# Ruta para eliminar un producto (DELETE)
@api.route("/products/<int:id>", methods=["DELETE"])
def deleteProduct(id):
    # Buscar el producto por su ID
    product = Products.query.get(id)

    # Si el producto no se encuentra, devolver un error 404
    if not product:
        return jsonify({"error": "Producto no encontrado"}), 404

    # Eliminar el producto de la base de datos
    db.session.delete(product)
    db.session.commit()

    # Devolver una respuesta de éxito
    return jsonify({"message": "Producto eliminado exitosamente"}), 200
@api.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        body = request.json
        email = body.get("email", None)
        password = body.get("password", None)
        print(body)
        if email is None or password is None:
            return jsonify("You need an email and a password"), 400
        else:
            user = User.query.filter_by(email=email).first()
            if user is None:
                return jsonify({"message": "Bad credentials"}), 400
            else:
                print("realizando verificación de password")
                if check_password(user.password, password, user.salt):
                    print("coincide password")
                    # Crear un diccionario con los datos del usuario
                    user_data = {
                        "id": user.id,
                        "email": user.email,
                        "admin": user.admin

                        # Agrega otros campos de usuario que desees incluir
                    }

                    # Crear el token
                    token = create_access_token(identity=user_data)

                    # Incluir tanto el token como los datos del usuario en la respuesta
                    response_data = {
                        "token": token,
                        "user": user_data
                    }

                    return jsonify(response_data), 200
                else:
                    return jsonify({"message": "Bad credentials"}), 400


@api.route("/logout", methods=["POST"])
@jwt_required()
def logout():

    verification = verifyToken(get_jwt()["jti"])
    if verification == False:
        return jsonify({"message": "forbidden"}), 403

    try:
        jti = get_jwt()["jti"]
        identity = get_jwt_identity()["email"]  # asociada al correo
        print("jti: ", jti)
        # creamos una instancia de la clase TokenBlocked
        new_register = TokenBlocked(token=jti, email=identity)

        db.session.add(new_register)
        db.session.commit()

        return jsonify({"message": "logout succesfully"}), 200

    except Exception as error:
        print(str(error))
        return jsonify({"message": "error trying to logout"}), 403


@api.route('/reservation', methods=['POST'])
@jwt_required()
def hacer_reserva():

    if request.method == "POST":
        # Si la sesión está autenticada, permite hacer la reserva
        # Obtiene los datos de la reserva desde la solicitud POST
        # Asume que los datos de la reserva se   envían como JSON en la solicitud
        reservation_data = request.json
        print(reservation_data)
        fecha_dtr = datetime.strptime(
            reservation_data['reservation_date'], "%Y-%m-%d %H:%M:%S")
        # print(get_jwt_identity())
        # Crea una nueva instancia de Reservation y asigna el usuario autenticado
        print(get_jwt_identity()["id"])
        nueva_reserva = Reservas(
            reservacion_date=fecha_dtr,
            # Supongamos que current_user representa al usuario autenticado
            user_id=get_jwt_identity()["id"],
            cantidad_personas=reservation_data['cantidad_personas']
        )
        try:
            # Guarda la reserva en la base de datos
            db.session.add(nueva_reserva)
            db.session.commit()
            return jsonify({"message": "Reserva creada con éxito."}), 201

        except Exception as error:
            db.session.rollback()
            return jsonify({"message": f"Error : {error}"}), 201
    # else:
    #     return jsonify({"message": "Usuario no autenticado."}), 401

    # access_token = create_access_token(identity=email)
    # return jsonify(access_token=access_token)


# Definición de la clase Reservas (como se muestra en tu código)

# Ruta para obtener todas las reservas


@api.route('/reservas', methods=['GET'])
def get_reservas():
    reservas = Reservas.query.join(User).all()  # Unir la tabla de usuarios para obtener datos relacionados
    return jsonify([reserva.serialize() for reserva in reservas])

# Ruta para obtener una reserva por su ID


@api.route('/reservas/<int:id>', methods=['GET'])
def get_reserva(id):
    reserva = Reservas.query.get(id)
    if reserva is None:
        return jsonify({"error": "Reserva no encontrada"}), 404
    return jsonify(reserva.serialize())

# Ruta para crear una nueva reserva


@api.route('/reservas', methods=['POST'])
def create_reserva():
    data = request.get_json()
    nueva_reserva = Reservas(
        reservacion_date=data['reservacion_date'],
        user_id=data['user_id'],
        reservacion_hour=data['reservacion_hour'],
        cantidad_personas=data['cantidad_personas']
    )
    db.session.add(nueva_reserva)
    db.session.commit()
    return jsonify(nueva_reserva.serialize()), 201

# Ruta para actualizar una reserva por su ID


@api.route('/reservas/<int:id>', methods=['PUT'])
def update_reserva(id):
    reserva = Reservas.query.get(id)
    if reserva is None:
        return jsonify({"error": "Reserva no encontrada"}), 404

    data = request.get_json()
    reserva.reservacion_date = data['reservacion_date']
    reserva.user_id = data['user_id']
    reserva.reservacion_hour = data['reservacion_hour']
    reserva.cantidad_personas = data['cantidad_personas']
    db.session.commit()
    return jsonify(reserva.serialize())

# Ruta para eliminar una reserva por su ID


@api.route('/reservas/<int:id>', methods=['DELETE'])
def delete_reserva(id):
    reserva = Reservas.query.get(id)
    if reserva is None:
        return jsonify({"error": "Reserva no encontrada"}), 404
    db.session.delete(reserva)
    db.session.commit()
    return jsonify({"message": "Reserva eliminada con éxito"})


@api.route("/preference", methods=["POST"])
def preference():
    body = json.loads(request.data)  # aca esta toda la info
    # acá decimos que en el body mandamos el total a pagar por el cliente?
    total = body["total"]
    # Crea un ítem en la preferencia
    preference_data = {
        "items": [
            {
                # aquí ponemos el nombre de nuestra app.
                "title": "Geeks Coffee",
                "quantity": 1,  # por defecto se deja 1
                # aca mandamos lo que guarda la variable "total", la suma del total a pagar
                "unit_price": total,
            }
        ],
        "payer": {
            # este es el usuario de prueba comprador
            "email": "test_user_17805074@testuser.com"
        },
        "back_urls": {

            "success": os.environ["FRONTEND_URL"]+"/pago",
            "failure": os.environ["FRONTEND_URL"]+"/pago",
            # En este caso las tres están configuradas para que lo manden de nuevo a la página home de la app.
            "pending": os.environ["FRONTEND_URL"]+"/pago"

        },
        "auto_return": "approved"
    }  # preference es el nombre que le dimos a nuestra ruta para pagar con mercadopago
    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]
    print(preference)
    return preference, 200
