import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/contacto.css";

const Contacto = () => {
  return (
    <section className="contacto">
      <div className="contacto-container">
        <div className="contacto-info">
          <h2>Contáctenos</h2>
          <p>
            ¡Un mundo donde la tecnología y la gastronomía convergen de manera
            innovadora!
          </p>
        </div>
        <div className="contacto-info-container">
          <div className="contacto-detalles">
            <h2>Detalles</h2>
            <ul>
              <li>Teléfono: (506) 2456-7890</li>
              <li>Dirección: San Pedro, Costa Rica</li>
              <li>Horario: Lunes a Viernes de 7:00 AM a 9:00 PM</li>
              <li>Correo: GeeksCoffee@gmail.com</li>
            </ul>
            <div className="contacto-redes-sociales">
              {<FontAwesomeIcon icon="fa-brands fa-instagram" />}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {<FontAwesomeIcon icon="fa-brands fa-facebook" />}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              {<FontAwesomeIcon icon="fa-brands fa-twitter"  />}
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          <div className="contacto-mapa">
            {/* Aquí puedes integrar un mapa de Google Maps o cualquier otro servicio de mapas */}
            {/* Ejemplo de un mapa de Google Maps */}
            <iframe
              title="Ubicación del restaurante"
              width="100%"
              height="300"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-123.456789!3d12.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI3JzI5LjAiTiAxMjPCsDU1JzQ4LjciVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
