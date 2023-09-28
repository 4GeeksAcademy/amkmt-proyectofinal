import React from 'react';

const Card = ({item}) => {
  console.log()
    return (
        <div className="card" style={{width: "18rem"}}> 
          <img className="card-img-top" src="" alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">{item?.name}</h5>
            <a href="#" className="btn btn-danger">{item?.description}</a>
          </div>
        </div>
    );
}

export default Card