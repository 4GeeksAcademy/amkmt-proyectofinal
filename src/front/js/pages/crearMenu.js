import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import "../../styles/prueba.css";
import Card from "../component/card.jsx";

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
        })
    }

    const agregarMenu = async () => {

        const formData = new FormData()
        formData.append("name", producto.name)
        formData.append("description", producto.description)
        formData.append("image", producto.image)
        formData.append("price", producto.price)

        let response = await actions.agregarMenu(formData)
        if (response == 201) {
            setProducto(estadoInicial)
            Swal.fire(
                "Producto Creado Exitosamente",
                "Congratulation",
                "success"
            )

        }

        // event.preventDefault();
        // actions.agregarMenu(name, description, image, price)
        // setName("");
        // setDescription("");
        // setImage("");
        // setPrice("");
    }

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
                                    type="text"
                                    name="price"
                                    placeholder="precio"
                                    onChange={handleChanges}

                                    value={producto.price} />
                            </div>
                        </div>
                        <div className="btn-field">
                            <button className="col-4" id="signIn" type="button" onClick={agregarMenu}>Agregar al Menu</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <div className="list-group">
                    {

                        store.products?.map((item) => {
                            return (
                                <label className="list-group-item" key={item.id} product={item} >


{item.name}
{item.id}
                                    < button className="col-4" type="button"> Editar</button>
                                </label>
                            )
                        })

                    }</div >
            </div >
        </>
    )
}

export default CrearMenu;