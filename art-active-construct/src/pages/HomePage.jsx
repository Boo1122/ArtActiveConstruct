import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

 export class HomePage extends Component {
     
render() {
        return (
            <div className='page home-page'>

  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="c.jpeg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="c.jpeg"
        alt="Second slide"
      />
                        
        <Carousel.Caption>
        <h3>Fourth</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="c.jpeg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

            </div>
        );
    }
}



