import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from '../src/Footer';


 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        title: 'Art Active Construct',
        headerLinks: [
          {title: 'Home', path:'/'},
          {title: 'About us', path:'/about'},
          {title: 'Portfolio', path:'/portfolio'},
          {title: 'Services', path:'/services'},
          {title: 'Contact', path:'/contact'},
        ],
        home: {
          title: 'Acasa incepe cu o caramida'
        }
     }
   }
   
  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
            <Navbar className='border-bottom' bg='transparent' expand='lg' >
              <Navbar.Toggle aria-controls='navbar-toggle' />
              <Navbar.Collapse id='navbar-toggle' /> 
              <Nav className='position-links'>
                <Link id='border' className='navbar-left nav-link' to='/' >Home</Link>
                <Link id='border' className='nav-link' to='/about' >About us</Link>
                <Link id='border' className='nav-link' to='/portfolio'>Portfolio</Link>
                <Link id='border' className='nav-link' to='/services'>Services</Link>
                <Link id='border' className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar>

            <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;