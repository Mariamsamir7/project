// import React from "react";
// import {getById} from "../api/products";

// export default class Product extends React.Component{

//     state={
//         loading: true,
//         product: {}
//     };

//     componentDidMount(){
//         const id = this.props.match.params.id;

//         getById(parseInt(id))
//             .then(product => {
//                 this.setState({
//                     product,
//                     loading: false
//                 });
            
//             })
//     }

//     render(){
//         if(this.state.loading)
//             return 'Loading ..';

//         const product = this.state.product;

//         return (
//             <div>
//                 <div className={'row'}>
//                     <div className="col-6">
//                         <img src={product.image} width={'100%'} alt=""/>
//                     </div>
//                     <div className={"col-6"}>
//                     <h1>{product.name}</h1>
                    

//                         <p>Price: {product.price}LE</p>

//                         <p>{product.description}</p>

//                         <br/><br/>

//                         <input type="number" />
                          
                        
//                         <br /><br />

//                         <button className="btn btn-primary">
//                             Add to Cart
//                         </button>

//                     </div>
//                 </div>
//             </div>
//         );
//     }
 
// }


import React from "react";

import { connect } from "react-redux";
import {addToCart} from "../store/actions/actions"
const post={
    "id": 1,
    "name": "Sneakers",
    "price": 100 ,
    "image": "/images/1.jfif",
    "description":"EnableSize: 38 , 39 , 40.    Enablecolor:white. "
    
  };
  
  
  
 class Product extends React.Component{
    state={
    quantity:0,
    product:{}
    };
  
    handleQuantity=(event)=>{
        const value =event.target.value;
        if(value<0)
        return 0;
        this.setState({
            quantity:value
        })
    }
    addToCart=(product)=>{
        this.props.addToCart(product,this.state.quantity);

    }
   
    render(){
        const product = this.state.product;
        const quantity=this.state.quantity;
                return (
                    <div>
                        <div className={'row'}>
                            <div className="col-6">
                                <img src={post.image} width={'100%'} alt=""/>
                                
                            </div>
                            <div className={"col-6"}>
                            <h1>{post.name}</h1>
                           
                            
        
                                <p>Price: {post.price}LE</p>
        
                                <p>{post.description}</p>
        
                               
                                <input type="number" value={quantity} onChange={this.handleQuantity}/>
                                  
                                
                                <br /><br />
                                <p>Total:{quantity * post.price}</p>
                                <button className="btn btn-primary" onClick={()=>this.addToCart(product)}>
                                    Add to Cart
                                </button>
        
                            </div>
                        </div>
                        
                    </div>
                    
                );
            }
         
        }
       
            const mapDispatchToProps=(dispatch)=>{
              return{
                addToCart:(productsInfo, quantity)=>dispatch(addToCart(productsInfo, quantity)),
                   };}
        export default connect(null,mapDispatchToProps)(Product);