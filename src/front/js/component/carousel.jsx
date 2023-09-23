import React from "react"
import Landing from '../../img/fotonueva.png'
import Foto from '../../img/GeeksCoffee.png'
import Foto2 from '../../img/GeeksCoffee2.png'
import Foto3 from '../../img/GeeksCoffee3.png'



const Carousel = () => {
    return (
        // <div id="carouselExampleControls" classNameNameName="carousel slide" data-bs-ride="carousel">
        //     <div classNameNameName="carousel-inner">
        //         <div classNameNameName="carousel-item active text-center slide-1">
        //             {/* <img src={Foto1} classNameNameName="d-block w-100" alt="..." /> */}
        //             <img src="https://static.vecteezy.com/system/resources/previews/001/377/296/non_2x/cup-of-espresso-coffee-and-roasted-beans-on-white-background-free-photo.jpg" classNameNameName="d-block w-100" alt="..." />
        //             <div classNameNameName="container h-100 d-flex align-items-center justify-content-center">
        //                 <div classNameNameName="row justify-content-center">
        //                     <div classNameNameName="col-lg-8">
        //                         <h6 classNameNameName="text-color">DONDE LA PROGRAMACIÓN SE ENCUENTRA CON EL SABOR</h6>
        //                         <h1 classNameNameName="display-1">GEEKS COFFEE</h1>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div classNameNameName="carousel-item text-center">
        //             <img src={Foto2} classNameNameName="d-block w-100" alt="..." />
        //         </div>
        //         <div classNameNameName="carousel-item">
        //             <img src="https://images.wallpaperscraft.com/image/single/coffee_coffee_pot_coffee_shop_126219_1920x1080.jpg" classNameNameName="d-block w-100" alt="..." />
        //         </div>
        //     </div>
        //     <button classNameNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        //         <span classNameNameName="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span classNameNameName="visually-hidden">Previous</span>
        //     </button>
        //     <button classNameNameName="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        //         <span classNameNameName="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span classNameNameName="visually-hidden">Next</span>
        //     </button>
        // </div>

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active text-center">
                    <img src={Foto} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src={Foto2} className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                    <img src={Foto3} className="d-block w-100" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Carousel