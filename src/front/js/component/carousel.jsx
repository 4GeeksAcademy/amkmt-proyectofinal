import React from "react"




const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active text-center slide-1">
                    <img src="https://images.wallpaperscraft.com/image/single/coffee_coffee_pot_coffee_shop_126219_1920x1080.jpg" className="d-block w-100" alt="..." />
                    <div className="container h-100 d-flex align-items-center justify-content-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h6 className="text-color">DONDE LA PROGRAMACIÓN SE ENCUENTRA CON EL SABOR</h6>
                                <h1 className="display-1">GEEKS COFFEE</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item text-center">
                    <img src="https://images.wallpaperscraft.com/image/single/coffee_coffee_pot_coffee_shop_126219_1920x1080.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.wallpaperscraft.com/image/single/coffee_coffee_pot_coffee_shop_126219_1920x1080.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )


}

export default Carousel