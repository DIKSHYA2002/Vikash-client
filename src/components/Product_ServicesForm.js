import React ,{useContext, useState} from "react";
import  axios from "axios";
import './Products-service.css';

export const  AddProducts =(props)=> {
    const [Name , setName ] = useState();
    const [Price , setPrice ] = useState();
    const [Description , setDescription ] = useState();
    const [ ProductImage , setProductImage ] = useState();
    const [Availabilty , setavailability]= useState();

                const send=(event)=>{
                    const data = new FormData();
                    data.append("Name" , Name);
                    data.append("Price" , Price);
                    data.append("testImage" , ProductImage);
                    data.append("Description" , Description);
                    data.append("Availabilty" , Availabilty);
                    event.preventDefault();
                   axios.post("http://localhost:4001/products/add" , data).then(res=>
                   console.log(res)).catch(err=> console.log(err));
                   event.preventDefault();
                }

            return(
                
                    <div className="form1-container">
                        
                        <form className="form-main" >
                            <div className="heading">
                                <h1>products</h1>
                            </div>
                            <div className="name fm">
                                    <div className="title">item name:</div>
                                    <input type="text" id="Name"  name="Name" placeholder="name" 
                                    onChange={ event => {
                                    const {value} = event.target;
                                    setName(value) ;}}></input>
                            </div>
                            <div className="price fm">
                                     <div className="title">item price:</div>
                                    <input type="text" id="Price" name="Price"placeholder="price" 
                                     onChange={ event => {
                                        const {value} = event.target;
                                        setPrice(value);}}></input>
                            </div>
                              <div className="image fm">
                                    <div className="title">item image:</div>
                                    <input type="file" id="itemimage" name="itemimage"placeholder="image"   onChange={ event => {
                                        const file = event.target.files[0];
                                        setProductImage(file);}}></input>
                            </div>
                            <div className="description fm">
                                    <div className="title">item description:</div>
                                    <input type="text" id="Description" name="Description"placeholder="description" onChange={ event => {
                                        const {value} = event.target;
                                        setDescription(value);}} ></input>
                            </div>
                            <div className="Availabilty fm">
                                    <div className="title">availabilty:</div>
                                    <input type="text" id="availabilty" name="Availabity"placeholder="Availability" onChange={ event => {
                                        const {value} = event.target;
                                        setavailability(value)}} ></input>
                            </div>
                            <input type="submit" value="Submit"className="submit fm" onClick={send}></input>
                         
                        </form>
                    </div>
              
            );
    
}
export const  AddServices =(props)=> {
    const [TypeOfService, settype ] = useState();
    const [Cost , setcost ] = useState();
    const [Servicedescription , setDescription ] = useState();
    const [ serviceImage , setservice ] = useState();
    const [Availabilty , setavailability]= useState();

                const send=(event)=>{
                    const data = new FormData();
                    data.append("TypeOfService" , TypeOfService);
                    data.append("Cost" , Cost);
                    data.append("Servicedescription" , Servicedescription);
                    data.append("testImage" , serviceImage);
                    data.append("Availabilty" , Availabilty);
                    event.preventDefault();
                   axios.post("http://localhost:4001/services/add" , data).then(res=>
                   console.log(res)).catch(err=> console.log(err));
                   event.preventDefault();
                }

            return(
                <div  className="main">
                    <div className="form2-container">
                        
                        <form className="form-main" >
                        <div className="heading">
                                <h1>services</h1>
                            </div>
                            <div className="name fm">
                                    <div className="title">service type:</div>
                                    <input type="text" id="Name"  name="Name" placeholder="name" 
                                    onChange={ event => {
                                    const {value} = event.target;
                                   settype(value) ;}}></input>
                            </div>
                            <div className="price fm">
                                     <div className="title">charges:</div>
                                    <input type="text" id="Price" name="Price"placeholder="price" 
                                     onChange={ event => {
                                        const {value} = event.target;
                                        setcost(value);}}></input>
                            </div>
                              <div className="image fm">
                                    <div className="title">image:</div>
                                    <input type="file" id="itemimage" name="itemimage"placeholder="image"   onChange={ event => {
                                        const file = event.target.files[0];
                                        setservice(file);}}></input>
                            </div>
                            <div className="description fm">
                                    <div className="title">service description</div>
                                    <input type="text" id="Description" name="Description"placeholder="description" onChange={ event => {
                                        const {value} = event.target;
                                        setDescription(value);}} ></input>
                            </div>
                            <div className="Availabilty fm">
                                    <div className="title">availabilty:</div>
                                    <input type="text" id="availabilty" name="Availabity"placeholder="Availability" onChange={ event => {
                                        const {value} = event.target;
                                        setavailability(value)}} ></input>
                            </div>
                            <input type="submit" value="Submit"className="submit fm" onClick={send}></input>
                         
                        </form>
                    </div>
                </div>
            );
    
}
export const FormsAll = (props)=>{
    return(
        <div className="forms">
        <AddProducts/>
        <AddServices/>
       </div>
    );
   
}

