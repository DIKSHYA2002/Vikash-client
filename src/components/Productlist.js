
import { Products } from './Products';
import axios from "axios";
import { useState,useEffect } from 'react';

export const  Productlist =(props)=>{

  const [itemslist , setItems]= useState([]);
  useEffect(()=>{
     axios.get("http://localhost:4001/products")
     .then((res)=> setItems(res.data) )
      .catch((err)=> console.log(err));
  })
 
    return (
      <div>
        
        {props.children};
        {
           
        itemslist.map((item, index) => 
                {
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array((item.ProductImage.data.data)))); 
                    item.ProductImage = `data:image/png;base64,${base64String}`;
                    < Products ProductImage ={item.ProductImage} Name={item.Name} Price={item.Price} Description={item.Description}  Availabilty = {item.Availability} key={index} />
                }
        )
        
        } 
        
     </div>  
    );
  
            }
