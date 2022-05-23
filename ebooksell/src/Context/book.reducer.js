import React from 'react'
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "./Types";

const BookReducer = (state,action) => {
  switch(action.type){
    case SHOW_HIDE_CART:{
      return{
        ...state,
        showcart:!state.showcart
      }
    }
    case ADD_TO_CART:{
      return{
        ...state,
        cartItems:[...state.cartItems,action.payload],
        price:state.cartItems.price+action.payload.price
      }
    }
    case REMOVE_ITEM:{
      return{
        ...state,
        cartItems:state.cartItems.filter(item=>item._id!=action.payload),
        price:state.cartItems.price-action.payload.price
      }
    }
    default:
      return state;

  }
 
  
}

export default BookReducer;