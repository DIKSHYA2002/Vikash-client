import  React ,{useContext} from 'react';
import axios from 'axios';


export function Servicelist(props){
    return (
        <div className='service_list'>
            <div className='item-container'>
                <div><img src={props.serviceimage} className='itemimage'></img></div>
                <div className='itemname'><h3>{props.TypeOfService}</h3></div>
                <div className='itemprice'><h3>${props.Cost}</h3></div>
                <div className='itemdescription'>
                <h3>{props.servicedescription}</h3>
                <div className='availabilty'><h3>${props.Availability}</h3></div>
                </div>
            </div>
        </div>
    )
}