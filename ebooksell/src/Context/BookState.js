import { useEffect, useReducer } from "react";
import BookContext from "./book.context";
import BookReducer from "./book.reducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "./Types";

export const BookState = (props) => {

  const intialState = {
   showCart:false,
   cartItems:[],
   totalprice:0,
  };
  const [state, dispatch] = useReducer(BookReducer,intialState);



  const addToCart=(item)=>{
    dispatch({
        type:ADD_TO_CART,
        payload:item
    })
  }

  const removeItem =(id)=>{
    dispatch({
        type:REMOVE_ITEM,
        payload:id
    })
  }

  const showHideCart=()=>{
    dispatch({
        type:SHOW_HIDE_CART
    })
  }




  return (
    <BookContext.Provider
      value={{
        showCart:state.showCart,
        cartItems:state.cartItems,
        removeItem,
        addToCart,
        showHideCart,
        totalprice:state.totalprice
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
