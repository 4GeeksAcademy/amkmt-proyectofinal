// import React, { useContext } from "react";
// import { Context } from "../store/appContext";

// import "../../styles/index.css";
// import "../../styles/carousel.css";

// import Jumbotron from "../component/jumbotron.jsx";
// import Card from "../component/card.jsx";
// import { Link } from "react-router-dom";

// //create your first component
// const EditMenu = () => {
//     const { store, actions } = useContext(Context)
//     console.log(store.products)
//     return (
//         <>
//             <div className="container py-3">
//                 <Jumbotron />
//                 <div className="row ms-2 my-3 d-inline-flex justify-content-center">
                    
//                     {
//                         store.products?.map((item) => {
//                             return (
//                                 <Card key={item.id} product={item} />
//                             )
//                         })
//                     }
//                 </div>
//             </div>

//             <div className="botondereservaen">
//                 <p className="titulodereserva">¿Te gustaría reservar?</p>
//                 <Link to="/reservation">
//                     <button className="botondereservaen" type="button" >Click acá</button>
//                 </Link>
//             </div>
//         </>

//     );
// };

// export default EditMenu;
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";

const EditMenu = () => {
  // Utiliza useParams para obtener los parámetros de la ruta
  const { id } = useParams();

  const [producto, setProducto] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  const handleChanges = (event) => {
    setProducto({
      ...producto,
      [event.target.name]: event.target.value,
    });
  };

  const actualizarProducto = async () => {
    try {
      const formData = new FormData();
      formData.append("name", producto.name);
      formData.append("description", producto.description);
      formData.append("image", producto.image);
      formData.append("price", producto.price);

      const response = await fetch(
        `${process.env.BACKEND_URL}/products/${id}`,
        {
          method: "PUT",
          body: formData,
          headers:{"Content-Type": "multipart/form-data"}
        }
      );

      if (response.ok) {
        Swal.fire(
          "Producto Actualizado Exitosamente",
          "Congratulation",
          "success"
        );
        // No es necesario redirigir aquí, ya que el Link lo hará
      } else {
        console.error("Error al actualizar el producto");
      }
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  useEffect(() => {
    const obtenerDetallesProducto = async () => {
      try {
        const response = await fetch(
          `https://super-space-fishstick-qwv7wpw54xx3xv49-3001.app.github.dev/api/products/${id}`
        );

        if (response.ok) {
          const data = await response.json();
          // Actualiza el estado del producto con los detalles obtenidos
          setProducto(data);
        } else {
          console.error("Error al obtener detalles del producto");
        }
      } catch (error) {
        console.error("Error al obtener detalles del producto:", error);
      }
    };

    obtenerDetallesProducto();
  }, [id]);

  return (
    <>
      {/* ... (resto del componente) ... */}
      <div>
        <div className="container">
          <div className="form-content">
            <h1 id="title">Editar Producto</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="">
                <div className="input-field" id="nameInput">
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    onChange={handleChanges}
                    value={producto.name}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="description"
                    placeholder="Descripción"
                    name="description"
                    onChange={handleChanges}
                    value={producto.description}
                  />
                </div>
                <div className="input-field">
                  <input
                    type="file"
                    placeholder="Imagen"
                    name="image"
                    onChange={(event) =>
                      setProducto({
                        ...producto,
                        image: event.target.files[0],
                      })
                    }
                  />
                </div>
                <div className="input-field" id="nameInput">
                  <input
                    type="text"
                    name="price"
                    placeholder="Precio"
                    onChange={handleChanges}
                    value={producto.price}
                  />
                </div>
              </div>
              <div className="btn-field">
                <button
                  className="col-4"
                  id="signIn"
                  type="button"
                  onClick={actualizarProducto}
                >
                  Actualizar Producto
                </button>
              </div>
            </form>

            {/* Agrega el Link para ir a /products */}
            <div className="btn-field">
              <Link to="/products" className="col-4" id="goToProducts">
                Ir a Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMenu;