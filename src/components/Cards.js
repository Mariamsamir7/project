import React from "react";
import CardItem from "../pages/CardItem";
import { connect } from "react-redux";
import ProductsApi from "../api/products";
//import {addToCart} from "../store/actions/actions"
import {clearCart} from "../store/actions/actions"
  class Cart extends React.Component{
     
 placeOrder=()=>{
  this.props.clearCart();
  alert("we received your order , we are working on it ")
 }
 render(){ 
     return (
          <div> <h1>Cards</h1>
          <div className="row">
          {this.props.cartItems.map((item,index ) =>

             <div className={'col-3'} key={item.product.id}> 
             <CardItem item={item} index={index}/> </div> )} 
             </div>
             <br /> 
             <h3> 
                 Total: {this.props.total}
            </h3>
            <button className="btn btn-primary btn-block "  onClick={this.placeOrder} >Place order</button>
             </div>
              ); 
            }
        }
        const mapStateToProps=(state)=>{
          //console.log({state})
            return{
                cartItems:state.cart,
          total:state.cart.reduce((total,item)=> total+item.quantity * item.product.price, 0),
            };}
            const mapDispatchToProps=(dispatch)=>{
              return{
                clearCart:()=>dispatch(clearCart()),
                   };}
            
            export default connect(mapStateToProps,mapDispatchToProps)(Cart);
        