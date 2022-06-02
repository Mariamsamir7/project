import {legacy_createStore} from "redux";
import cartReducer from "./reducers";
const initialState={
cart:[
    {
        product:{
        "id": 1,
        "name": "Sneakers",
        "price": 100 ,
        "image": "/images/1.jfif",
        "description":"zxcvbnm,./"
       
      },
      
      quantity:5
    }
]
};

    

const store=legacy_createStore(cartReducer,initialState);
export default store;