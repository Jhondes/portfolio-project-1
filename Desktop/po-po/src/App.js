
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import React, { Component } from "react";


function App() {
  return (
    <>
    
     <Navbar />
     <Header />
     <AboutUs />
     <Services />
     
    </>
  );
}

export default App;
