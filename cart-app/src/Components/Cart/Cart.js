import React from "react";
import { useSelector } from "react-redux";


import Card from "../UI/Card"
import "./Cart.css";
import List from '../UI/List'

const Cart = () => {
  const store = useSelector((state) => state);
    // console.log(store?.cart)
  return (
    <>
    <h2>My Cart</h2>
    <div className="main-div">
    <div className="cart-box">
      
       
      {store.cart?.map((cartItem) => {
        return (
          <Card
            key={cartItem?.id}
            title={cartItem?.title}
            img={cartItem?.thumbnail}
            price={cartItem?.price}
             btnText={"Remove From Cart"}
          />
        );
      })}
    </div>
    <div className="checklist" >
        <h4>Checkout List</h4>
        <List/>
        <button>Click To Checkout</button>
    </div>
    </div>
    </>
  );
};

export default Cart;