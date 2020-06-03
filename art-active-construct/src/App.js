import './App.css';
import Header from '../src/Header/Header';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./Footer/Footer";
import './Footer/Footer.css'



class App extends Component {
   render() {
     return (
       <div className='page-container'>
         <div className='content-wrap'>
         <Router>
          <Header />
           <Switch>
             <Route path='/' exact component={HomePage} />

             <Route path='/about' exact component={AboutPage} />

             <Route path='/portfolio' exact component={PortfolioPage} />

             <Route path='/services' exact component={ServicesPage} />

             <Route path='/contact' exact component={ContactPage} /> 
          </Switch>
        </Router>
         </div>  

       <Footer />
      </div>
        
     )
   }
 }
  

export default App;

