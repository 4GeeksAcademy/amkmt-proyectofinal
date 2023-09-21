import React from "react";

import "../../styles/index.css";

import { Link } from 'react-router-dom';


//create your first component
const Home = () => {
	return (
		<>
			<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item bg-dak vh-100 active">
						<div className="container h-100 d-flex aling-items-center justify-content-center">
							<div className="row justify-content-center">
								<div className="col-lg-8">
									<h6 class="text-white">DONDE LA PROGRAMACIÓN SE ENCUENTRA CON EL SABOR</h6>
									<img src="img/logo-removebg-preview"></img>
									<a href="#" class="btn btn-brand">Reservaciones</a>
								</div>
							</div>
						</div>

					</div>
					<div class="carousel-item">
					<div className="container h-100 d-flex aling-items-center justify-content-center">
							<div className="row justify-content-center">
								<div className="col-lg-8">
									<h6 class="text-white">DONDE LA PROGRAMACIÓN SE ENCUENTRA CON EL SABOR</h6>
									<img src="img/logo-removebg-preview"></img>
									<a href="#" class="btn btn-brand">Reservaciones</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</>

	);
};

export default Home;