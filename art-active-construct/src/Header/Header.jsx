import React from 'react';
import './Header.css'
import { useLocation } from 'react-router-dom'
import { HeaderButtons } from "./Components/HeaderButtons";


function isSelected(url, componentName) {
    if (url === "/" && componentName === "home") return true;
    return url.includes(componentName);
}

    function Header() {
        const { pathname } = useLocation();
   
        return (
            <div className='header'>
                <HeaderButtons
                    text='Acasa' 
                    selected={isSelected(pathname, 'home')}
                    path='/'
                />    

                <HeaderButtons
                    text='Despre noi' 
                    selected={isSelected(pathname, 'about')}
                    path='about'
                />  

                <HeaderButtons
                    text='Servicii' 
                    selected={isSelected(pathname, 'services')}
                    path='services'
                />  

                <HeaderButtons
                    text='Portofoliu' 
                    selected={isSelected(pathname, 'portfolio')}
                    path='portfolio'
                />  

                <HeaderButtons
                    text='Contact' 
                    selected={isSelected(pathname, 'contact')}
                    path='contact'
                />  
    
            </div>
        );
    }


export default Header;
