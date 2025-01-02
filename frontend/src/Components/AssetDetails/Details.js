import React, {useState, useEffect} from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import Asset from '../Asset/Asset';
//display
const URL = "http://localhost:5000/asset";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function Details() {

  const [asset, setAsset] = useState();
  useEffect(()=> {
    fetchHandler().then((data) => setAsset(data.asset));
  },[])

  return (
    <div>
      <Nav/>
      <h1>display page</h1>
      <div>
        {asset && asset.map((asset, i) => (
          <div key={i}>
            <Asset asset={asset}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Details
