import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_DATA,CLEAR_ALL } from './Action'
import { initialState } from './Store'

const rootReducer = (state = initialState, action) => {


    let currentItem=[];
    let newUpdatedCart = [];

    switch (action.type) {
        case ADD_TO_CART:
            //  console.log(state?.products)
            // console.log(state.cart.length)

            if (state.cart.length === 0) {
                currentItem = state?.products?.filter((product) => {

                    return product.id === action.payload

                })
                // alert("Product added in cart")
                //   console.log(currentItem)
            }
            else {
                // console.log(state?.products)
                const checkItem = state?.cart.find((item) => item.id === action.payload)
              
                    if(typeof checkItem==="undefined")
                    {
                        // alert("Product added in cart")
                    
                    currentItem = state?.products?.filter((product) => {
                        return product.id === action.payload

                    })
                    }
                    else
                    alert("Product is already added in cart")
                //  console.log(currentItem)
            }

            return {
                ...state

                , cart: [...state.cart, ...currentItem]
            };


       
        case REMOVE_FROM_CART:
        //    console.log(action.payload)
            newUpdatedCart = state.cart.filter((cartItem) => {
                if (cartItem.id !== action.payload) return cartItem;
                else currentItem = { ...cartItem };
              });
            //   console.log(newUpdatedCart)
              return {
                ...state,
                cart: [...newUpdatedCart]
               
              };

        case FETCH_DATA:
            // console.log(state.products.length)
            // state.products=[action.payload]
            // console.log(action.payload)
            return { ...state, products: action.payload };
        case CLEAR_ALL:
            alert("Items have been checked out")
            return {
                ...state,
                cart:[]
            }
        default:
            return state;


    }



}
export default rootReducer