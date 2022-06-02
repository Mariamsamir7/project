import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./CardIcon.css";
 function CardIcon(props) {
  return <div id="cart-icon">
        <Link to="/cards">
      <i className="fa fa-shopping-cart"> </i> 
      <span className="badge badge-danger">{props.totalQuantity}</span>
      </Link>
    </div>
 
}
const mapStateToProps=(state)=>{
  return{
totalQuantity:state.cart.reduce((total,item)=> total+parseInt(item.quantity), 0),
  };
}
export default connect(mapStateToProps)(CardIcon);
