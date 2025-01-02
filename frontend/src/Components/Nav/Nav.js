import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom";


function Nav() {
  return (
    <div>
      <ul className='home-ul'>
        <li className='home-li'>
            <Link to = "/mainhome" className="activeHome">
            <h1>home</h1>
            </Link>
        </li>
        <li className='home-li'>
        <Link to = "/addasset" className="activeHome">
            <h1>Add Broken Asset</h1>
        </Link> 
        </li>
        <li className='home-li'>
        <Link to = "/details" className="activeHome">
            <h1>Asset Details</h1>
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav
