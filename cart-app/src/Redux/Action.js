export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const FETCH_DATA="FETCH_DATA";
export const CLEAR_ALL="CLEAR_ALL";

export const fetchAction=(payload)=>{
    return{
        type:FETCH_DATA,
        payload:payload
    }
}
export const addToCartAction = (payload) => {
    // const action = {
    //   type: ADD_TO_CART,
    //   payload: {
    //     id: 1,
    //   },
    // };
  
    return {
      type: ADD_TO_CART,
      payload: payload,
    };
  };
  
  export const removeFromCartAction = (payload) => {
    // const action = {
    //   type: ADD_TO_CART,
    //   payload: {
    //     id: 1,
    //   },
    // };
  
    return {
      type: REMOVE_FROM_CART,
      payload: payload,
    };
  };

  export const clearAllAction=()=>{
    return{
        type:CLEAR_ALL
       
    }
}