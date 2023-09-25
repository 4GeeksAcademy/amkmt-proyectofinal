import React, { Component } from "react";
import "../../styles/footer.css";
import logoOriginal from "../../img/logo.jpeg";

export const Footer = () => (

	<footer className="container-fluid footer">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-4 columna1footer">
					<h4>Contacto</h4>
					<p>Dirección: 123 Calle ******</p>
					<p>Teléfono: (123) ****-****</p>
					<p>Email: info@**********.com</p>
				</div>
				<div className="col-md-5 columna2footer">
					<h4>Horario de Apertura</h4>
					<p>Lunes - Viernes: 1:30 AM - 7:30 PM</p>
					<p>Sábados - Domingos: 1:30 AM - 7:30 PM</p>
				</div>
				<div className="col-md-1 fotofooter">
					<img className="imagendefooter" src={logoOriginal} alt="" />
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
