import React, { Component } from "react";
import "./HeaderButtons.css";
import { Link } from "react-router-dom";


 export class HeaderButtons extends Component {
 
     render() {
      

       const { selected, text, path } = this.props;

    return (
      
      
      <Link to={path} style={{ textDecoration: 'none' }} >
        <div className={`header-button${selected ? " selected" : ""} `}
          
          >
            
              <p>{text}</p>
        </div>
      </Link>
    );
  }
  }


