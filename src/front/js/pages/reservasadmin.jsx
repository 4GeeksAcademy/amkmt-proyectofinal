import React, { useEffect,useContext } from 'react';
import { useStore } from 'tu-libreria-de-estado'; // Asegúrate de importar la librería que estás utilizando

import { Context } from "../store/appContext";
const ReservasAdmin = () => {
    const { store, actions } = useContext(Context)
    console.log(store.reservationData)

    useEffect(() => {
        // Puedes realizar alguna lógica adicional aquí, si es necesario, al cargar la vista
    }, []);

    return (
        <div>
            <h2>Reservas</h2>
            
        </div>
    );
};

export default ReservasAdmin;