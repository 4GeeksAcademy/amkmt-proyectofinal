import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/inicio.css";
import { Link } from "react-router-dom";

const MenuPage = (id, name) => {
    // Datos del menú (sustituir los datos)
    const menuItems = [
        {
            id: 1,
            name: "B O W L S",
            description: "Nuestros bowls han llegado para quedarse, una deliciosa explosión de sabor que debes probar, no te lo decimos nosotros, lo dicen los expertos",
            image:
                "https://media.vogue.mx/photos/5c0711e06d624e83f2a1bb77/master/w_1600%2Cc_limit/los_mejores_restaurantes_para_comer_saludable_en_bogota_colombia_1768.jpg"
        },
        {
            id: 2,
            name: "S A N D W I C H E S",
            description:
                "Por algo somos los favoritos de la casa, descúbrenos ahora y entérate porqué somos tan populares por aquí, prometemos que no te vas a arrepentir",
            image:
                "https://img.freepik.com/foto-gratis/sandwiches-papas-fritas_144627-37679.jpg"
        },
        {
            id: 3,
            name: "S M O O T H I E S",
            description:
                "Conocidos como nuestras delicias de fin de semana, después de que los pruebes cambiarás tu concepto de un buen smoothie!! Garatizado",
            image:
                "https://th.bing.com/th/id/OIP.FomJCD-30P4a9DhyqeaSiwHaK5?pid=ImgDet&rs=1"
        },
    ];

    return (
        <div className="container-fluid inicio">
            <h1 className="titulodeinicio">Nuestros especiales</h1>
            <br />
            <br />
            <p className="subtitulodeinicio">
                Dicen que el amor por la comida es el amor más sincero, y por una buena
                razón, nos aseguran experiencias donde el placer es protagonista:
                sabores, texturas, aromas, son un mix irresistible que expresan
                sentimientos. <br />
                Dale un vistazo a nuestros deliciosos platillos especiales y anímate a
                probarlos.
            </p>
            <Row>
                {menuItems.map((item) => (
                    <Col key={item.id} md={4}>
                        <Card className="cards">
                            <Card.Body className="cuerpodecard">
                                <img className="imagenesdeinicio" src={item.image} alt="" />
                                 {<img src="rigo-baby.jpg" alt="" />} 
                                <Card.Title className="nombresdecomidas">{item.name}</Card.Title>
                                <Card.Text className="descripciondecomidas">{item.description}</Card.Text>
                                <Link to="/menu">
                                    <Button className="botondemenucompleto" variant="justify-content-center">
                                        MÁS

                                        <br />
                                        ——
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MenuPage;
