
import { Products } from './Products';
import axios from "axios";
import { useContext,useEffect } from 'react';
import ProductContext from '../store/ProductContext';


export const  Productlist =(props)=>{
          const ProductCtx = useContext(ProductContext);
            useEffect(()=>{
              getItems();
          },[])
        const getItems = async () => {
          const data = await fetch("http://localhost:4001/products");
          const items_data = await data.json();
          ProductCtx.setItems(items_data.products);
       }

 
    return (
      <div>
        {props.children}; 
         { ProductCtx.items.map((item,index) => 
             
                 < Products  Name={item.Name} Price={item.Price} Description={item.Description}  Availability = {item.Availability} key = {index}/>

             
         
           )}  
       </div>  
    );
  
            }
            // ProductImage={`data:image/png;base64,${base64String}`}
            // const base64String = btoa(
            //   String.fromCharCode(...new Uint8Array((item.ProductImage.data.data))));