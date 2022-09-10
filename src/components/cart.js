import React from "react";
import { useContext } from "react";
 import { Navbar } from "./Navbar";
 import CartContext from "../store/CartContext";

export function Cart(){
    const Cartctx = useContext(CartContext);
  
  return(
    <div className="carts">
    <div className="nav">
      <Navbar/>
      </div>
      <div className="cart">
      {
        Cartctx.cartItem.map((items ,index)=>
        {
           return  <div className="item">
                <div>{items.Name}</div>
                <div>{items.Price}</div>
                <div>{items.quantity}</div>
             </div>
        })
      }
      </div>
      </div>

  )
}