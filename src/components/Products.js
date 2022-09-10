import  React ,{useContext} from 'react';
import axios from 'axios';
import './ProductList.css';
import { useEffect } from 'react';
import ProductContext from '../store/ProductContext';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';
import CartContext from '../store/CartContext';

export function Products(){
    const ProductCtx = useContext(ProductContext);
    const Cartctx = useContext(CartContext);
    useEffect(() => {
        getItems();
      }, [])
      const getItems = async () => {
        const data = await fetch("http://localhost:4001/products");
        const items_data = await data.json();
        ProductCtx.setItems(items_data.products);
      }
      const buynowhandler=(event)=>{
      
        const CartOBject =
        {
             Name : event.target.parentNode.parentNode.querySelector(".Name").innerText,
             quantity: 1,
             Price:event.target.parentNode.parentNode.querySelector(".Price").innerText
         }
         let cartItem = [...Cartctx.cartItem];
         console.log(cartItem);
        cartItem =cartItem.filter(cartitem=>cartitem.Name===event.target.parentNode.parentNode.querySelector(".Name").innerText);
         if(cartItem.length>0)
         {
            cartItem[0].quantity =cartItem[0].quantity +1;
         }
         else{
             Cartctx.setcartitems([...Cartctx.cartItem,CartOBject]);
         }
     }
 
      const navigate = useNavigate();

    return (
        <div className='list'>
          <div className='navs'>
          <Navbar />
         </div>
        <h1>Products</h1>
        <div className='ProductsList'>
                        <div className='product' >
                                    {ProductCtx.items.map((singleData,index) => 
                                    {
                                      const base64String = btoa( String.fromCharCode(...new Uint8Array(singleData.ProductImage.data.data))  );
                                        return <div className='item-container'key={index}>
                                        <img src={`data:image/png;base64,${base64String}`}  width="300"></img>
                                        <div className='Name'><h3>{singleData.Name}</h3></div>
                                        <div className='Price'><h3>{singleData.Price}</h3></div>
                                        <div className='Description'>
                                        <h3>{singleData.Description}</h3>
                                        <div className='Availabilty'><h3>{singleData.Availability}</h3></div>
                                        <button className='buyNow' onClick= {buynowhandler}>buynow</button>
                                        </div>    
                                </div>
  
                                    
                                })}
                        
                        </div>
                       
                        </div>
                        <button  onClick={()=>navigate("/add")}>ADD PRODUCTS</button>
                        <button  onClick={()=>navigate("/cart")}>cart</button>
                        
    </div>
    )
}
