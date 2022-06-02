import React from "react";
export default function ProducItems(props){
const{product}=props;
  return (
    <div className="card">
      
      <img src={product.image} className="card-img-top " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">price {product.price} LE</p>
        <a href={"/products/"+ product.id} className="btn btn-primary">
          Details
        </a>
      </div>
      
    </div>
    
  );
}

