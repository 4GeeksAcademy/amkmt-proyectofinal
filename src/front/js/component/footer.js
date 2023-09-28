import React, { Component } from "react";
import "../../styles/footer.css";
import logoOriginal from "../../img/logo.jpeg";
import Codigo from '../../img/codigo.png'
import { Link } from "react-router-dom";
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
				<div className="col-md-10 columna3footer">
					<p>¡Te esperamos y estaremos encantadas de atenderte!</p>
					<p className="parrafo2"> Te dejamos algunas opiniones de nuestros clientes. Dale click al loguito para verlos.</p>
				</div>
				<div className="col-md-1 fotofooter">
					{/* <img className="imagendefooter" src={logoOriginal} alt="" /> */}
					<Link to="/testimonio">
						<img className="imagendefooter" src={logoOriginal} alt="" />
					</Link>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
