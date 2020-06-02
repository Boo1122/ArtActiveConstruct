import './App.css';
import Header from '../src/Header/Header';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
// import { AboutPage } from ".src/pages/AboutPage";
// import { PortfolioPage } from ".src/pages/PortfolioPage";
// import { ServicesPage } from ".src/pages/ServicesPage";
// import { ContactPage } from ".src/pages/ContactPage";



class App extends Component {
   render() {
     return (
       <Router>
        <div className='app'>
          <Header />

           <Switch>
             <Route path='/' exact component={HomePage} />

             {/* <Route path='/about' exact component={AboutPage} />

             <Route path='/portfolio' exact component={PortfolioPage} />

             <Route path='/services' exact component={ServicesPage} />

             <Route path='/contact' exact component={ContactPage} /> */}
          </Switch>
        </div>
       </Router>
     )
   }
 }
  

export default App;

