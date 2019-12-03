import React from 'react'
import {  Link } from "react-router-dom";

const Home  =() =>{
         return(
           
			 <div style={{  
  backgroundImage: url(process.env.PUBLIC_URL + "img/UET_Auditorium.png"),
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
			<section id="hero" className="wow fadeIn">
			<div className="hero-container">
				<br></br>
				<br></br>
				
			  <h1>Welcome to Easy-Ride</h1>
			  <h2>Go Home Early &amp; Save Time &amp; Money Just Registered Here and Enjoy Our Service </h2>
			  <img src="img/bg.png" alt="Hero Imgs" />
			  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfS1uvY9aKcKItEv18tpzBDUfXTTjApZx6MQeojzxiIIHDX0Q/viewform?usp=sf_link
"  className="btn-get-started scrollto">
			<h1 style={{fontWeight:'bold'}}>	Registered Here</h1>
			  </a>
			
			</div>
			

		  </section>
		  
			
			
			
		  </div>
         )
     }
 

 export default Home
