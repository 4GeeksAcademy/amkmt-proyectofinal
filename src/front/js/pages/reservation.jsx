import React, { useState, useContext } from "react";
import "../../styles/reservation.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"



const Reservation = () => {
  const { store, actions } = useContext(Context)
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fechaReserva, setFechaReserva] = useState("");
  const [hora, setHora] = useState("");
  const [cantidad, setCantidad] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFechaReservaChange = (event) => {
    setFechaReserva(event.target.value);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
  };

  const handleCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para procesar la reserva
  };

  return (
    <div className="containnn">
      <h2 className="reservademesa">Reserva de Mesa</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={handleNombreChange}
          required
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="fecha">Fecha de Reserva:</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={fechaReserva}
          onChange={handleFechaReservaChange}
          required
        />

        <label htmlFor="hora">Hora:</label>
        <select
          id="hora"
          name="hora"
          value={hora}
          onChange={handleHoraChange}
          required
        >
          <option value=""></option>
          <option value="13:30">1:30pm</option>
          <option value="14:00">2:00pm</option>
          <option value="15:00">3:00pm</option>
          <option value="16:00">4:00pm</option>
          <option value="17:30">5:30pm</option>
          <option value="18:00">6:00pm</option>
          <option value="18:30">6:30pm</option>
          <option value="19:30">7:30pm</option>
        </select>

        <label htmlFor="cantidad">Cantidad:</label>
        <select
          id="cantidad"
          name="cantidad"
          value={cantidad}
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

          <button className="col-6" type="button" onClick={(e) => actions.reservation(cantidad, fechaReserva, email, nombre, mesaRe)}>1. Reservar</button>
          <Link to="/pago">
            <button className="col-6 pagar" >2. Pagar reservación</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
