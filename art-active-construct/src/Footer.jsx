import './Footer.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

 function Footer() {
    return (
      <footer className='border-top footer'>
            <div id='container'>
              <p className='copyright'>@Copyright 2020. All rights reserved</p>
              <ul className='contacts'>
                <li>Email: bgafenco@gmail.com</li>
                <li>Phone number: 0742640690</li>
                <li>Adress: Cartier Grigorescu</li>
              </ul>
            </div>
        
      </footer>
    )
}
export default Footer;