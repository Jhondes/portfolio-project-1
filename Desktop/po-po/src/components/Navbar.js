 import React from "react";
 import logo from "../logo.png";
 // REACT FONTAWESOME IMPORTS
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faBars } from "@fortawesome/free-solid-svg-icons";
 const Navbar = () => {
   return (
    <nav class="navbar navbar-expand-sm navbar-light bg-dark">
      <div className="container">

     
	  
		<a class="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul class="navbar-nav ">
			
			<li class="nav-item">
			  <a class="nav-link" href="#">about</a>
			</li>			
      
			<li class="nav-item">
			  <a class="nav-link" href="#">services</a>
			</li>			
      
			<li class="nav-item">
			  <a class="nav-link" href="#">portfolio</a>
			</li>			
      
			<li class="nav-item">
			  <a class="nav-link" href="#">contact</a>
			</li>			
		  </ul>		  
		</div>
	  </div>
    
	</nav>
        
   );
 }
 
 export default Navbar;
 