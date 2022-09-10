import React from "react";
import { useContext } from "react";
 import { Navbar } from "./Navbar";
 import CartContext from "../store/CartContext";

export function Cart(){
    const Cartctx = useContext(CartContext);
    let cartItem = [...Cartctx.cartItem];
        function remove(event)
        {
            let cartItem = [...Cartctx.cartItem];
             cartItem = Cartctx.cartItem.filter((item)=>{
                return item.Name!=event.target.parentNode.querySelector(".Name").innerText;})
            Cartctx.setcartitems([...cartItem]);
        

        }
       function inc(event){
                cartItem = Cartctx.cartItem.filter((item)=>{
                    return  item.Name===event.target.parentNode.querySelector(".Name").innerText;
                })
                if(cartItem[0].quantity >=1)
                {
                
                cartItem[0].quantity+=1;
                Cartctx.setcartitems([...Cartctx.cartItem])
                }
        }
        function dec(event){
                    cartItem = Cartctx.cartItem.filter((item)=>{
                        return item.Name===event.target.parentNode.querySelector(".Name").innerText;
                    })
                if(cartItem[0].quantity >=2)
                {
                
                    cartItem[0].quantity -=1;
                    Cartctx.setcartitems([...Cartctx.cartItem]);
                }
                    
        }
  
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
                <div className="Name">{items.Name}</div>
                <div>{items.Price}</div>
                <button className="inc" onClick={inc} >+</button>
                {items.quantity}
                <button className="dec"onClick={dec}>-</button>
                <button className="remove" onClick={remove}>remove</button>

             </div>
        })
      }
      </div>
      </div>

  )
}