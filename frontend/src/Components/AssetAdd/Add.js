import React, {useState} from 'react';
import Nav from '../Nav/Nav';
import {useNavigate} from "react-router";
import axios from "axios";

function Add() {
  const history = useNavigate();
  const [inputs,setInputs] = useState({
    name:"",
    EPF:"", 
    location:"", 
    Intercom:"", 
    Item:"", 
    Brand:"", 
    Model:"", 
    SerialNumber:"", 
    AssetNumber:"", 
    Error:"",

  });
  const handleChange =(e) =>{
    setInputs((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('details'))
  };

  const sendRequest = async()=>{
    await axios.post("http://localhost:5000/asset",{
      name: String (inputs.name),
      EPF: Number (inputs.EPF),
      location: String (inputs.location),
      Intercom: Number (inputs.Intercom),
      Item: String (inputs.Item),
      Brand:  String (inputs.Brand),
      Model: String (inputs.Model),
      SerialNumber:  String (inputs.SerialNumber),
      AssetNumber:  String (inputs.AssetNumber),
      Error:  String (inputs.Error),

    }).then(res => res.data);
  }

  return (
    <div>
      <Nav/>
      <h1>Add asset</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br/>
        <input type="text" name="name" onChange={handleChange} value={inputs.name} required></input>
        <br></br>
        <label>EPF</label>
        <br/>
        <input type="text" name="EPF" onChange={handleChange} value={inputs.EPF} required></input>
        <br></br>
        <label>Location</label>
        <br/>
        <input type="text" name="location" onChange={handleChange} value={inputs.location} required></input>
        <br></br>
        <label>Intercom</label>
        <br/>
        <input type="text" name="Intercom" onChange={handleChange} value={inputs.Intercom} required></input>
        <br></br>
        <label>Item</label>
        <br/>
        <input type="text" name="Item" onChange={handleChange} value={inputs.Item} required></input>
        <br></br>
        <label>Brand</label>
        <br/>
        <input type="text" name="Brand" onChange={handleChange} value={inputs.Brand} required></input>
        <br></br>
        <label>Model</label>
        <br/>
        <input type="text" name="Model" onChange={handleChange} value={inputs.Model} required></input>
        <br></br>
        <label>SerialNumber</label>
        <br/>
        <input type="text" name="SerialNumber" onChange={handleChange} value={inputs.SerialNumber} required></input>
        <br></br>
        <label>AssetNumber</label>
        <br/>
        <input type="text" name="AssetNumber" onChange={handleChange} value={inputs.AssetNumber} required></input>
        <br></br>
        <label>Error</label>
        <br/>
        <input type="text" name="Error" onChange={handleChange} value={inputs.Error} required></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Add

