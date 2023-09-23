import React from "react";

import Carousel from "../component/carousel.jsx"

import Logo from '../../img/logo.png'

import { Link } from 'react-router-dom';


//create your first component
const Home = () => {
	return (
		<>
			<Carousel />
			<section class="sobre-nosotros">
				<div class="resena-historica">
					<h2>Reseña Histórica</h2>
					<p>
						Geeks Café nació de la pasión y la creatividad de un grupo de chicas programadoras con una profunda pasión por la cocina y el deseo de emprender. En un mundo donde la tecnología y la gastronomía convergen de manera innovadora, estas visionarias mujeres unieron fuerzas para dar vida a un sueño único.
					</p>
					<p>
						Hace algunos años, estas amantes de la programación se conocieron en un evento de tecnología y, rápidamente, se dieron cuenta de su amor compartido por la comida. Después de muchas conversaciones y noches de café, decidieron combinar sus habilidades técnicas con su talento culinario para crear algo excepcional. Así, en el año 2023, Geeks Café abrió sus puertas al público, marcando el comienzo de una emocionante aventura.
					</p>
				</div>

				<div class="vision">
					<h2>Visión</h2>
					<p>
						En Geeks Café, nuestra visión es fusionar el mundo de la tecnología con la pasión por la cocina, creando un espacio donde la innovación y la deliciosa comida se encuentren. Queremos ser reconocidas como pioneras en la convergencia de estos dos mundos, ofreciendo a nuestros clientes una experiencia única que estimule tanto sus mentes como sus paladares.
					</p>
				</div>

				<div class="mision">
					<h2>Misión</h2>
					<p>
						Nuestra misión es deleitar a nuestros clientes con platos creativos y deliciosos, inspirados en la cultura geek y en la diversidad culinaria. Buscamos proporcionar un ambiente acogedor y tecnológicamente avanzado donde las conversaciones fluyan tan libremente como el café y donde todos se sientan bienvenidos. Nos esforzamos por ser una cafetería que promueve la inclusión y el empoderamiento de las mujeres en la tecnología y la gastronomía.
					</p>
				</div>

				<div class="factor-diferenciador">
					<h2>Factor Diferenciador</h2>
					<p>
						Lo que realmente distingue a Geeks Café de otras cafeterías es nuestra habilidad para combinar la programación con la gastronomía de una manera única. No solo creamos un espacio digital funcional para que nuestros clientes conozcan nuestra historia, sino que también utilizamos la tecnología para mejorar su experiencia en el café. Desde aplicaciones interactivas para hacer pedidos hasta eventos temáticos que celebran la cultura geek, estamos constantemente innovando y sorprendiendo a nuestros visitantes.
					</p>
					<p>
						Además, nuestro compromiso con la inclusión y la igualdad de género nos convierte en un lugar donde la diversidad es valorada y celebrada. En Geeks Café, creemos que todos tienen un asiento en la mesa, y trabajamos juntos para construir un futuro donde la tecnología y el buen comer se unan de manera única y deliciosa. ¡Únete a nosotros en este emocionante viaje!
					</p>
				</div>
			</section>
		</>

	);
};

export default Home;