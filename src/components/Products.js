import React from "react";
import ProductItems from "../pages/ProductItems";
import ProductsApi from "../api/products";
export default class Products extends React.Component{
   state ={
     products:[],
   };
  
  componentDidMount(){
    ProductsApi.getAll()
    .then(data=> {
      this.setState({
        products:data
      })
    });
}
  render(){
    return (
<div>
      <h1> Products </h1>
      <div className="row">
        {this.state.products.map(product=>
        <div className={"col-4"} key={product.id}>
          <ProductItems product={product}/>
        </div>
       
        )}
      </div>
      
</div>

  );
}

}