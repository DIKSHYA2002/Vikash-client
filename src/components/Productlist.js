
import { Products } from './Products';
import axios from "axios";
import { useState,useEffect } from 'react';

export const  Productlist =(props)=>{

  const [itemslist , setitemslist]= useState([]);
  useEffect(()=>{
    getItems();
 },[])
        const getItems = async () => {
          const data = await fetch("http://localhost:4001/products");
          const items_data = await data.json();
          setitemslist(items_data.products);
        }

 
    return (
      <div>
        { 
        itemslist.map((item,index) => 
                {
              
                    < Products ProductImage ={item.ProductImage} Name={item.Name} Price={item.Price} Description={item.Description}  Availabilty = {item.Availability} />
                  
                }
        )
        
        }  
        
     </div>  
    );
  
            }
