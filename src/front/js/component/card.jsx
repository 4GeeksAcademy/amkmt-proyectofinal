import React from 'react';
import "../../styles/titulo.css";

const Card = ({ product }) => {
  console.log()
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.image} />
      <div className="card-body">
        <h5 className="card-title">{product?.name}</h5>
        <h5 className="card-title">{product?.price}</h5>
        <h5 className="card-tittleD">{product?.description}</h5>
        <button href="#" className="button-info"> +Info </button>
      </div>
    </div>
  );
}

export default Card