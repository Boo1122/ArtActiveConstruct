import './Footer.css';
import React from 'react';


 export function Footer() {
    return (
      <footer className='main-footer'>
        <div className='container'>
          <div className='row'>

            <div className='col'>

             <h4>Informatii</h4>

              <ul className='list-unstyled'>
                <li>Noutati</li>
                <li> Politica de confidentialitate</li>
                {/* <li>Something else</li> */}
              </ul>

            </div>

            <div className='col'>


              <ul className='list-unstyled'>

                <h4>Art Active Construct</h4>

                 <li><strong>Numar de telefon</strong>: (0742) 650 400</li>
                 {/* <li><strong>Adresa</strong>: Oradea, Romania</li> */}
                 <li><strong>Email: </strong>artactiveconstruct@gmail.com</li>
              </ul>
            </div>
            <div className='col'>

             <h4>Ne puteti urmari si pe:</h4>

              <ul className='list-unstyled'>
                <li>Facebook</li>
                <li>Instagram</li>
                {/* <li>Twitter</li> */}
              </ul>
            </div>
          </div>

          <hr className='line'/>
          <div className='row'>
            <p className='col-sm sub-footer'>
              &copy;{new Date().getFullYear()} ART ACTIVE CONSTRUCT | Toate drepturile rezervate | Termeni si conditii |

            </p>
            
            </div>
        </div>
      </footer>
    )
}

