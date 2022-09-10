import  React ,{useContext} from 'react';
import './ProductList.css';
import ServiceContext from '../store/ServiceContext';
import './ProductList.css';
import { Navbar } from "./Navbar";
import {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../store/CartContext';


export function Services(props)
{
            const ServiceCtx = useContext(ServiceContext);
            const Cartctx = useContext(CartContext);
            useEffect(()=>{
            getServices();
        },[])
        const  getServices = async () => {
                const data = await fetch("http://localhost:4001/services");
                const items_data = await data.json();
                
                ServiceCtx.setservices(items_data.products);
        }

        const buynowhandler=(event)=>{
      
            const CartOBject =
            {
                 Name : event.target.parentNode.querySelector(".TypeOfService").innerText,
                 quantity: 1,
                 Price:event.target.parentNode.querySelector(".Cost").innerText
             }
             let cartItem = [...Cartctx.cartItem];
             console.log(cartItem);
            cartItem =cartItem.filter(cartitem=>cartitem.Name===event.target.parentNode.querySelector(".TypeOfService").innerText);
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
                    <h1>Services</h1>
                        <div className='service_list'>
                                <div className='services'>
                                    {  ServiceCtx.services.map((singleData,index) => 
                                        {
                                                const base64String = btoa( String.fromCharCode(...new Uint8Array(singleData.serviceImage.data.data))  );

                                                return <div className='item-container' key={index}>
                                                    <img src={`data:image/png;base64,${base64String}`} width='300' className='itemimage'></img>
                                                    <div className='TypeOfService'><h3>{singleData.TypeOfService}</h3></div>
                                                    <div className='Cost'><h3>{singleData.Cost}</h3></div>
                                                    <div className='servicedescription'>
                                                    <h3>{singleData.Servicedescription}</h3> </div>
                                                    <button className='Avail' onClick= {buynowhandler}>avail now</button>
                                                    </div>
                                        
                                            
                                                }
                                        )
                                    }
                              </div>
                      </div>
                      <button onClick={()=>navigate("/add")}>ADD PRODUCTS</button>
                      <button  onClick={()=>navigate("/cart")}>cart</button>
              </div>
            )
}