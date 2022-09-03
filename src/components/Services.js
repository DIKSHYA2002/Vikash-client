import  React ,{useContext} from 'react';
import axios from 'axios';
import './ProductList.css';


export function Services(props){
    return (
        <div className='service_list'>
            <div className='item-container'>
                <div><img src={props.serviceimage} className='itemimage'></img></div>
                <div className='TypeOfService'><h3>{props.TypeOfService}</h3></div>
                <div className='Cost'><h3>{props.Cost}</h3></div>
                <div className='servicedescription'>
                <h3>{props.Servicedescription}</h3>
                <button className='Avail'>avail now</button>
                </div>
            </div>
        </div>
    )
}