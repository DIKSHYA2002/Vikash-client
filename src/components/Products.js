import  React ,{useContext} from 'react';
import axios from 'axios';
import './ProductList.css';
import { useEffect } from 'react';
import ProductContext from '../store/ProductContext';
import { Navbar } from './Navbar';

export function Products(){
    const ProductCtx = useContext(ProductContext);
    useEffect(() => {
        getItems();
      }, [])
      const getItems = async () => {
        const data = await fetch("http://localhost:4001/products");
        const items_data = await data.json();
        ProductCtx.setItems(items_data.products);
      }

    return (
        <div className='list'>
        <Navbar />
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
                                        <button className='buyNow'>buynow</button>
                                        </div> 
                                 
                                </div>
                                    
                                    
                                })}
                        
                        </div>
                        </div>
    </div>
    )
}
