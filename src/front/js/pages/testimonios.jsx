import React, { useState, useContext } from "react";
import "../../styles/testimonios.css";
import Codigo from '../../img/codigo.png'


const Testimonio = () => {
    return (

        <div class="container-fluid testimonios">
            <b>Opiniones de algunos de nuestros</b><b> clientes que nos gustaría compartir contigo</b>
            <hr />
          
            <input type="radio" name="slides" id="radio1" checked />
            <input type="radio" name="slides" id="radio2" />
            <input type="radio" name="slides" id="radio3" />
            <ul className="slides">
                <li className="slide">
                    <p>
                        <img src=" https://th.bing.com/th/id/OIP.Erv0nC9AEd-g6iMk8fWzkwHaG3?pid=ImgDet&rs=1" alt="" />
                        <br />
                        <q>La comida es excelente, buena ubicación.</q>
                        <span className="author">
                            Leti, SJ
                        </span>
                        <img id="imagenuno" src="https://th.bing.com/th/id/R.17744f100ade1b34f492619d782b9753?rik=KVWR14CbTajuLQ&riu=http%3a%2f%2fwww.macuhealth.com%2fwp-content%2fuploads%2f2016%2f02%2fclaire-1.jpg&ehk=yS81adv3L%2brWrYsE2I8Npz67AR1rHQOq9se9bIjb6L4%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </p>
                </li>
                <li className="slide">
                    <p>
                        <img src="https://i0.pngocean.com/files/698/250/479/blushing-emoji-smiley-face-clip-art-smile-thumb.jpg" alt="" />
                        <br />
                        <q>La atención un 10, todas muy dispuestas a atender y ayudar</q>


                        <span className="author">
                            Ana, Escazú
                        </span>
                        <img id="imagendos" src="https://th.bing.com/th/id/OIP.kbQuCk97SEy3lzEJR-rcKgHaHa?pid=ImgDet&rs=1" alt="" />
                    </p>
                </li>

                <li className="slide">
                    <p>
                        <img src="https://c0.klipartz.com/pngpicture/341/655/gratis-png-emoticon-de-llanto-emoji-de-whatsapp-del-dia-mundial-de-emoji-llorando-emoji-de-tristeza.png" alt="" />
                        <br />
                        <q>Lo único malo es cuando la comida se acaba.</q>


                        <span className="author">

                            Carlos,Tibás
                        </span>
                        <img id="imagentres" src="https://th.bing.com/th/id/OIP.PR4OWMQdKEzUf7obuTVLZAHaHa?pid=ImgDet&w=474&h=474&rs=1" alt="" />
                    </p>
                </li>


            </ul>
            <div className="navigation">
                <label for="radio1" id="radioSelect1"></label>
                <label for="radio2" id="radioSelect2"></label>
                <label for="radio3" id="radioSelect3"></label>

            </div>
        </div>

    )
}

export default Testimonio;