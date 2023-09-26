import React, { Component } from "react";
import "../../styles/footer.css";
import logoOriginal from "../../img/logo.jpeg";

export const Footer = () => (

	<footer className="container-fluid footer">
		<div className="container-fluid">
			<div className="row">
				{/* <div className="col-md-3 columna1footer">
					<h4>Contacto</h4>
					<p>Dirección: 123 Avenida Central SJ</p>
					<p>Teléfono: (506) 7183-3098</p>
				</div> */}
				{/* <div className="col-md-4 columna2footer">
					<h4>Horario de Apertura</h4>
					<p>Lunes - Viernes: 1:30 AM - 7:30 PM</p>
					<p>Sábados - Domingos: 1:30 AM - 7:30 PM</p>
				</div> */}
				<div className="col-md-9 columna3footer">
					<p>¡Te esperamos y estaremos encantadas de atenderte!</p>
					<p className="parrafo2">Recuerda, si quisieras visitarnos puedes reservar el lugar para asegurar tu espacio o venir en nuestro horario regular.</p>
				</div>
				<div className="col-md-2 fotofooter">
					<img className="imagendefooter" src={logoOriginal} alt="" />
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
