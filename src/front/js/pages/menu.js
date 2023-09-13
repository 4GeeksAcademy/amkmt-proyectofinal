import React from "react";

import "../../styles/index.css";


import Jumbotron from "../component/jumbotron.jsx"

import Card from "../component/card.jsx"


//create your first component
const Menu = () => {
	return (
		<>
		<div className="container py-3">
			<Jumbotron/>
			<div className="row ms-2 my-3 d-inline-flex justify-content-center">
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
			<div className="col-lg-3 col-sm-12 mx-3">
			<Card/>
			</div>
		</div>
		</div>
		
		<div>

		</div>
		</>
		
	);
};

export default Menu;