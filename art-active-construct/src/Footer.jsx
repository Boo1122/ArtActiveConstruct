import './Footer.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

 function Footer() {
    return (
      <footer className='border-top footer'>
          <Container>
            <p className='copyright'>@Copyright 2020. All rights reserverd</p>
            <ul className='contacts'>
                <li id='style'>Email: bgafenco@gmail.com</li>
                <li id='style'>Phone number: 0742 640 690</li>
                <li id='style'>Adress: Cartier Grigorescu</li>
            </ul>
          </Container>
      </footer>
    )
}
export default Footer;