import './Footer.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

 function Footer() {
    return (
      <footer className='border-top footer'>
        <Container fluid={true}>
              <p className='copyright'>@Copyright 2020. All rights reserved</p>
              <ul className='contacts'>
                <li>Email: artactiveconstruct@gmail.com</li>
                <li>Phone number: 0742640690</li>
                <li>Adress: Cartier Grigorescu</li>
              </ul>
        
        </Container>
      </footer>
    )
}
export default Footer;