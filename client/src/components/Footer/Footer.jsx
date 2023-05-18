import React from 'react';
import {Link} from 'react-router-dom';
import "./Footer.css"


const Footer = () => {
    return(
        <footer>
            <p>Desarrollado por Gastón Nieto 💻</p>
            <span>|</span>
            <Link to='/about'>
            <a>Contacto</a>
            </Link>
        </footer>
    )
};

export default Footer;