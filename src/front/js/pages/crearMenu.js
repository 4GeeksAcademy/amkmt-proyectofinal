import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import "../../styles/prueba.css";
import { Link } from "react-router-dom";

const estadoInicial = {
    name: "",
    description: "",
    image: "",
    price: "",
}

const CrearMenu = () => {
    const { store, actions } = useContext(Context);
    const [producto, setProducto] = useState(estadoInicial);

    const handleChanges = (event) => {
        setProducto({
            ...producto,
            [event.target.name]: event.target.value
        });
    };

    const actualizarListaDeProductos = async () => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/products`);
            const data = await response.json();

            if (response.ok) {
                // Actualizar el estado global con la nueva lista de productos
                actions.setProducts( data );
            } else {
                // Manejar el error, por ejemplo, mostrar un mensaje de error
                console.error('Error al actualizar la lista de productos');
            }
        } catch (error) {
            console.error('Error al actualizar la lista de productos:', error);
        }
    };
   

    const agregarMenu = async () => {
        const formData = new FormData();
        formData.append("name", producto.name);
        formData.append("description", producto.description);
        formData.append("image", producto.image);
        formData.append("price", producto.price);

        try {
            let response = await actions.agregarMenu(formData);

            if (response === 201) {
                setProducto(estadoInicial);
                Swal.fire(
                    "Producto Creado Exitosamente",
                    "Congratulation",
                    "success"
                );
                // Actualizar la lista de productos después de la creación
                await actualizarListaDeProductos();
            } else {
                // Manejar el error, por ejemplo, mostrar un mensaje de error con Swal
                Swal.fire(
                    "Error al Crear el Producto",
                    "Por favor, inténtelo nuevamente",
                    "error"
                );
            }
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    const borrarMenu = async (productId) => {
        try {
            // Llamar a la ruta DELETE en el backend para borrar el producto por su ID
            const response = await fetch(`${process.env.BACKEND_URL}/products/${productId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                console.log('Producto eliminado exitosamente');
                // Actualizar la lista de productos después de la eliminación
                await actualizarListaDeProductos();
                // Mostrar alerta de éxito con Swal
                Swal.fire(
                    "Producto Eliminado Exitosamente",
                    "Congratulation",
                    "success"
                );
            } else {
                console.error('Error al eliminar el producto');
                // Manejar el error, por ejemplo, mostrar un mensaje de error con Swal
                Swal.fire(
                    "Error al Eliminar el Producto",
                    "Por favor, inténtelo nuevamente",
                    "error"
                );
            }
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };
    return (
        <>
            <div className="container">
                <div className="form-content">
                    <h1 id="title">Menu</h1>
                    <form>
                        <div className="    ">
                            <div className="input-field" id="nameInput">
                                <i className="fa-solid fa-utensils"></i>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name="name"
                                    onChange={handleChanges}
                                    value={producto.name} />
                            </div>
                            <div className="input-field">
                                <i className="fa-regular fa-file-lines"></i>
                                <input
                                    type="description"
                                    placeholder="descripcion"
                                    name="description"
                                    onChange={handleChanges}
                                    value={producto.description} />
                            </div>
                            <div className="input-field">
                                <i className="fa-regular fa-image"></i>
                                <input
                                    type="file"
                                    placeholder="imagen"
                                    name="image"
                                    onChange={(event) => setProducto({ ...producto, image: event.target.files[0] })}
                                />
                            </div>
                            <div className="input-field" id="nameInput">
                                <i className="fa-solid fa-tag"></i>
                                <input
                                    type="price"
                                    name="price"
                                    placeholder="precio"
                                    onChange={handleChanges}
                                    value={producto.price} />
                            </div>
                        </div>
                        <div className="btn-field">
                            <button className="col-4" id="signIn" type="button" onClick={agregarMenu}>
                                Agregar al Menu
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className="list-group">
                    {store.products?.map((item) => (
                        <label className="list-group-item row" key={item.id} product={item}>
                            <div className="row">
                                <div className="col-lg-1">{item.id}</div>
                                <div className="col-lg-5">{item.name}</div>
                                <Link to={`/editar/${item.id}`} className="col-lg-2 mb-3" >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>
                                <button className="col-lg-2 mb-3" type="button" onClick={() => borrarMenu(item.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CrearMenu;