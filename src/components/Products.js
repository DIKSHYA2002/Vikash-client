import  React ,{useContext} from 'react';
import axios from 'axios';
import './ProductList.css';


export function Products(props){
    return (
        <div className='product'>
            <div className='item-container'>
                <div><img src={props.ProductImage} className='ProductImage'></img></div>
                <div className='Name'><h3>{props.Name}</h3></div>
                <div className='Price'><h3>{props.Price}</h3></div>
                <div className='Description'>
                <h3>{props.Description}</h3>
                <div className='Availabilty'><h3>{props.Availability}</h3></div>
                <button className='buyNow'>buynow</button>
                </div>
            </div>
        </div>
    )
}