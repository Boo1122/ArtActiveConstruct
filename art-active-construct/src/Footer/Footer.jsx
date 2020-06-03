import './Footer.css';
import React from 'react';


 export function Footer() {
    return (
      <footer className='main-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h4>Art Active Costruct</h4>
              <ul className='list-unstyled'>
                 <li>(0742) 650 400</li>
                 <li>Oradea, Romania</li>
                 <li>Cartier Grigorescu nr.12</li>
              </ul>
            </div>
            <div className='col'>
              <h4>For cousin</h4>
              <ul className='list-unstyled'>
                <li>Something 3</li>
                <li>Something 3</li>
                <li>Something 3</li>
              </ul>
            </div>
            <div className='col'>
              <h4>Project</h4>
              <ul className='list-unstyled'>
                <li>Something else</li>
                <li>Something else</li>
                <li>Something else</li>
              </ul>
            </div>
          </div>
          <hr/>
          <div className='row'>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} ART ACTIVE CONSTRUCT | Toate drepturile rezervate | Termeni si conditii |

            </p>
            
            </div>
        </div>
      </footer>
    )
}

