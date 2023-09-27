import React, { useState, useContext } from "react";
import "../../styles/reservation.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"



const Reservation = () => {
  const { store, actions } = useContext(Context)
  const [reservation_date, setReservation_date] = useState("");
  const [cantidad_personas, setCantidad_Personas] = useState("");


  const handleReservation_DateChange = (event) => {
    setReservation_date(event.target.value);
  };


  const handleCantidadChange = (event) => {
    setCantidad_Personas(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para procesar la reserva
  };

  return (
    <div className="containnn">
      <h2 className="reservademesa">Reserva de Mesa</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="fecha">Fecha y hora de Reserva:</label>
        <input
          type="datetime"
          id="fecha"
          name="fecha"
          value={reservation_date}
          onChange={handleReservation_DateChange}
          required
        />

        <label htmlFor="cantidad">Cantidad:</label>
        <select
          id="cantidad"
          name="cantidad"
          value={cantidad_personas}
          onChange={handleCantidadChange}
          required
        >
          <option value=""></option>
          <option value="1">1 persona</option>
          <option value="2">2 personas</option>
          <option value="3">3 personas</option>
          <option value="4">4 personas</option>
          <option value="5">5 personas</option>
          <option value="6">6 personas</option>
        </select>
        <div>

          <button className="col-6" type="button" onClick={(e) => actions.reservation(reservation_date, cantidad_personas)}>1. Reservar</button>
          <Link to="/pago">
            <button className="col-6 pagar" >2. Pagar reservación</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
