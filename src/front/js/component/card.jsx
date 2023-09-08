import React from 'react';

const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}> 
          <img className="card-img-top" src="https://images.ctfassets.net/n7hs0hadu6ro/2kXdxxIdkuOGj872zosdw8/d5bb142e2182bebfcfc1d5dd1afd8c2a/comida-tipica-de-puebla-una-aventura-de-sabor.jpg?w=1257&h=835&fl=progressive&q=50&fm=jpg" alt="Card image cap" /> 
          <div className="card-body">
            <h5 className="card-title">Menú del día</h5>
            <a href="#" className="btn btn-primary">$10</a>
          </div>
        </div>
    );
}

export default Card