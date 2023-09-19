import React from "react";
import "../../styles/reservation.css";


const Reservation = () => {

    // const [mesare, setMesare] = useState("");
    // const [nombre, SetName] = useState("");
    // const [email, SetEmail] = useContext("");
    // const [fechareserva, SetFechareserva] = useState("");
    // const [cantidad, SetCantidad] = useState("");

    return (
        <div class="containnn">
            <h2 className="reservademesa">Reserva de Mesa</h2>
            <form action="procesar_reserva" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />

                <label for="fecha">Fecha de Reserva:</label>
                <input type="date" id="fecha" name="fecha" required />

                <label for="comensales">Hora:</label>
                <select id="comensales" name="comensales" required>
                    <option value="0"></option>
                    <option value="1">1:30pm</option>
                    <option value="1">2:00pm</option>
                    <option value="1">3:00pm</option>
                    <option value="2">4:00pm</option>
                    <option value="3">5:30pm</option>
                    <option value="4">6:00pm</option>
                    <option value="5">6:30pm</option>
                    <option value="6">7:30pm</option>
                </select>

                <label for="comensales">Cantidad:</label>
                <select id="comensales" name="comensales" required>
                    <option value="0"></option>
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6">6 personas</option>
                </select>



                <button type="submit">Reservar</button>
            </form>
        </div>

    );
};

export default Reservation
