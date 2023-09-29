import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/index.css";
import "../../styles/carousel.css";

import Jumbotron from "../component/jumbotron.jsx";
import Card from "../component/card.jsx";
import { Link } from "react-router-dom";

//create your first component
const EditMenu = () => {
    const { store, actions } = useContext(Context)
    console.log(store.products)
    return (
        <>
            <div className="container py-3">
                <Jumbotron />
                <div className="row ms-2 my-3 d-inline-flex justify-content-center">
                    
                    {
                        store.products?.map((item) => {
                            return (
                                <Card key={item.id} product={item} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="botondereservaen">
                <p className="titulodereserva">¿Te gustaría reservar?</p>
                <Link to="/reservation">
                    <button className="botondereservaen" type="button" >Click acá</button>
                </Link>
            </div>
        </>

    );
};

export default EditMenu;