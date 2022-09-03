import { Services} from "./Services";
import axios from "axios";
import { useContext,useEffect } from 'react';
import ServiceContext from '../store/ServiceContext';
import './ProductList.css';


export const Servicelist =(props)=>{
          const ServiceCtx = useContext(ServiceContext);
            useEffect(()=>{
              getServices();
          },[])
        const  getServices = async () => {
          const data = await fetch("http://localhost:4001/services");
          const items_data = await data.json();
          ServiceCtx.setservices(items_data.products);
       }

 
    return (
      <div className='list'>
        <h1>Services</h1>
      <div className='servicesList'>
        


        {props.children}
         {  ServiceCtx.services.map((item,index) => 
             
                 < Services  TypeOfService={item.TypeOfService} Cost={item.Cost} Servicedescription={item.Servicedescription}  key = {index}/>

             
         
           )}  
       </div> 
       </div> 
    )
  
            }