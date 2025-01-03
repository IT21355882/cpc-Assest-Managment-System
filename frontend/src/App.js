import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home";
import Add from "./Components/AssetAdd/Add";
import Details from "./Components/AssetDetails/Details";
import Update from "./Components/Update/Update";
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import ProtectedRoute from './Components/RouterProtector';


function App() {
  return (
    <div>
     <React.Fragment>
      <Routes>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/mainhome" element={<Home/>}/>
        <Route path="/addasset" element={<Add/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/details/:id" element={<Update/>}/>
      </Routes>
     </React.Fragment>
    </div>
  );
}

export default App;
