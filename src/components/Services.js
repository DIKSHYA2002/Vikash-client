import  React ,{useContext} from 'react';
import './ProductList.css';
import ServiceContext from '../store/ServiceContext';
import './ProductList.css';
import { Navbar } from "./Navbar";
import {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function Services(props)
{
            const ServiceCtx = useContext(ServiceContext);
            useEffect(()=>{
            getServices();
        },[])
        const  getServices = async () => {
                const data = await fetch("http://localhost:4001/services");
                const items_data = await data.json();
                
                ServiceCtx.setservices(items_data.products);
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
                                                    <button className='Avail'>avail now</button>
                                                    </div>
                                        
                                            
                                                }
                                        )
                                    }
                              </div>
                      </div>
                      <button onClick={()=>navigate("/add")}>ADD PRODUCTS</button>
              </div>
            )
}