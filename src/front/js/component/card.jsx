import React from 'react';

const Card = ({ product }) => {
  console.log()
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{product?.name}</h5>
        <a href="#" className="btn btn-danger">{product?.description}</a>
      </div>
    </div>
  );
}

export default Card