import React from "react"
import Landing from '../../img/fotonueva.png'
import Foto from '../../img/GeeksCoffee.png'
import Foto2 from '../../img/GeeksCoffee2.png'
import Foto3 from '../../img/GeeksCoffee3.png'
import Recetas1 from "../../img/Recetas1.png"
import Recetas2 from "../../img/Recetas2.png"
// import Historia from "../../img/Historia.png"
import "../../styles/carousel.css";



const Carousel = () => {
    return (
        
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active text-center">
                    <img src={Foto} className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src={Foto2} className="d-block w-100" alt=""/>
                </div>
                <div className="carousel-item">
                    <img src={Foto3} className="d-block w-100" alt=""/>
                </div>
            </div>
            <div className="Recetas">
            <img src={Recetas1} className="d-block w-100" alt="" />
            <img src={Recetas2} className="d-block w-100" alt="" />
            </div>

            {/* <div className="Sobre Nosotros">
            <img src={Historia} className="d-block w-100" alt="" />
            </div> */}


        </div>



    )
}

export default Carousel;