
import { ADD_T0_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/types";

export default function cartReducer(state,action){
    //console.log(state,action)
    switch(action.type){
        case ADD_T0_CART:{
            return{
                cart:[
                    ...state.cart,
                    {
                        product:action.productInfo,
                        quantity:action.quantity
                    }
                ]
            }
        }
        case REMOVE_FROM_CART:{
            const item_index=action.index;
            const new_state={...state};
            delete new_state.cart[item_index];
            return new_state;
        }
        case CLEAR_CART:{
           
            const new_state={...state};
            new_state.carT=[]
            return new_state;
        }
        default:
            return state;
    }

}