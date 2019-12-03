import React from 'react';
import { HashRouter, BrowserRouter,  Route, Switch, Link } from 'react-router-dom';
import Contact from './components/contact'
import Home from './components/home';
import About from './components/about';
import Team from './components/team';
import Footer from './components/footer'

  const App =()=>{
    return (
      <div>
        <div>
  <header id="header" className="header header-hide">
    <div className="container">
      <div id="logo" className="pull-left">
        <h1>
          <a href="/" className="scrollto">
            <span>Easy</span>Ride 
      
          </a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="#body"><img src="img/logo.png" alt="" title="" /></a>*/}
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          
          
          <li>
            <a href="/team">Team</a>
          </li>
          
          
           
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* #nav-menu-container */}
    </div>
  </header>
  <BrowserRouter>    

    <Switch>
    <Route exact path='/'  component={Home} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/team' component={Team} />
    <Route exact path="/about"  component={About} />
    </Switch>
    </BrowserRouter>
 

</div>
<Footer/>  
          </div>
    );
  }

export default App;
