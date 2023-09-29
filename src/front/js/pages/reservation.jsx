import React, { useState, useContext } from "react";
import "../../styles/reservation.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import Swal from "sweetalert2";




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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para procesar la reserva
    let data = {

      "reservation_date": reservation_date,
      "cantidad_personas": cantidad_personas
    }

    let respuesta = await actions.fetchPromise("/reservation", "POST", data)
    if (respuesta.ok) {
      respuesta = await respuesta.json()
      console.log(respuesta)
      Swal.fire({
        icon: "success",
        title: "Reserva exitosa",
        text: "Puedes proceder con el pago",
        timer: 3500
      })




    }

  };


  const pagar = async () => {
    let total = 10
    console.log(total);
    await actions.pagoMercadoPago(total);
    let direccion = await store.mercadoPago.init_point;// direccion guarda la url que trae init_point
    console.log(direccion);
    window.location.replace(direccion);// window es para renderizar y mandar al cliente a la url de pagar
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

          {/* <button className="col-6" type="button" onClick={(e) => actions.reservation(reservation_date, cantidad_personas)}>1. Reservar</button> */}
          <button className="col-6 reservar" type="submit" >1. Reservar</button>
          <button type="button" className="col-6 pagar" onClick={pagar}  >2. Pagar reservación </button>

        </div>
      </form>
    </div>
  );
};


export default Reservation;
