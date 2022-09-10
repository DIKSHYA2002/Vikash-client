import React, { useEffect } from "react";
import { useContext } from "react";
 import { Navbar } from "./Navbar";
 import CartContext from "../store/CartContext";
 import { useState } from "react";

export function Cart(){
    let [totalAmount , setTotalAmount]= useState(0);

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
                Cartctx.setcartitems([...Cartctx.cartItem]);
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
        useEffect(() => {
            total();
          })

        function total(){
            let sum =0;
            Cartctx.cartItem.map((item,index)=>{
               
                sum += Number(item.Price)*item.quantity;

            })
            setTotalAmount(sum);
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
                <div>{Number(items.Price)*items.quantity}</div>
                <button className="inc" onClick={inc} >+</button>
                {items.quantity}
                <button className="dec"onClick={dec}>-</button>
                <button className="remove" onClick={remove}>remove</button>

             </div>
        })
      }
      <div><h1>TOTAL AMOUNT:{totalAmount}</h1></div>
      </div>
      </div>

  )
}