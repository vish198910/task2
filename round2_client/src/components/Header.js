import React from "react";
import {Jumbotron, Navbar} from "react-bootstrap";
import HeaderImage from "../assets/16.jpg"
const Header  = ()=>{
    return <>
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"  style={{padding:"10px"}}>
      Litwiz Labs
    </Navbar.Brand>
  </Navbar>
    </div>
    <Jumbotron style={{textAlign:"start", padding:"50px",minWidth:"100%",position:"absolute",color:"white",minHeight:"400px",backgroundImage:`url(${HeaderImage})`}}>
        <h5>MODEL GALLERY</h5>
        <h4><strong>Pre-trained AI Models to Get You Started</strong></h4>
        <h4>Explore our pre-built, ready-to-use AI models to suit your specific use cases.</h4>
    </Jumbotron>
    </>;

}

export default Header;
