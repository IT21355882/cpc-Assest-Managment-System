import React from "react";
import Button from 'react-bootstrap/Button';
import NavigationBar from "../Nav/Nav";

function Home() {
  return (
    <div>
      <NavigationBar/>
      <h1>Home</h1>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default Home;
