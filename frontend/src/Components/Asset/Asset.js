import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {useNavigate} from "react-router-dom";



function Asset(props) {
    const {_id,name, EPF, location, Intercom, Item, Brand, Model, SerialNumber, AssetNumber, Error} = props.asset; 
    
    const history = useNavigate();

    const deleteHandler = async () =>{
      await axios.delete(`http://localhost:5000/asset/${_id}`)
      .then(res=>res.data)
      .then(() =>history("/"))
      .then(() =>history("/details"))
    }
    return (
      <div>
        
        <h1>add</h1>
        <br></br>
        <h1>ID:{_id}</h1>
        <h1>Name:{name}</h1>
        <h1>EPF:{EPF}</h1>
        <h1>Location:{location}</h1>
        <h1>Intercom:{Intercom}</h1>
        <h1>Item:{Item}</h1>
        <h1>Brand:{Brand}</h1>
        <h1>Model:{Model}</h1>
        <h1>Serial Number:{SerialNumber}</h1>
        <h1>Asset Number:{AssetNumber}</h1>
        <h1>Error:{Error}</h1>
        <Link to={`/details/${_id}`}>Update</Link>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    )
}

export default Asset
