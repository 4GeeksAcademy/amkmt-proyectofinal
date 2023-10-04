import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const ReservasAdmin = () => {
    const [reservas, setReservas] = useState([]);
    useEffect(() => {
        // Hacer la solicitud GET a la API
        fetch(`${process.env.BACKEND_URL}/reservas`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error de red: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Actualizar el estado con las reservas obtenidas
                setReservas(data);
            })
            .catch(error => console.error('Error al obtener las reservas:', error.message));
    }, []);
    return (
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
            <h2>Reservas</h2>
            <ul>
                {reservas.map(reserva => (
                    <li key={reserva.id}>
                        <p>ID: {reserva.id}</p>
                        <p>Fecha de Reserva: {reserva.reservacion_date}</p>
                        <p>Nombre del Usuario: {reserva.user_name}</p>
                        <p>Correo del Usuario: {reserva.user_email}</p>
                        <p>Cantidad de Personas: {reserva.cantidad_personas}</p>
                        {/* Puedes agregar más detalles de la reserva aquí */}
                        <hr />
                    </li>
                ))}
            </ul>
            <Link className="btn btn-product" variant="primary" to="/administrador">
                            Volver
                        </Link>
        </div>
    );
};
export default ReservasAdmin;