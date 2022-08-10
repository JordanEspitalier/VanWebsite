import { useState } from "react";
import { Link } from "react-router-dom";



function Navigation(){


    return (
        <nav className="nav">
            <ul>
                <Link to='/'>
                    <li className="nav-li">Accueil</li>
                </Link>
                <Link to='/prestations'>
                    <li className="nav-li">Prestations</li>
                </Link>
                <Link to='/realisations'>
                    <li className="nav-li">Réalisations</li>
                </Link>
                <Link to='/contact'>
                    <li className="nav-li">Contact</li>
                </Link>
            </ul>
            <div className="logo">
                <div>LOGO</div>
            </div>
        </nav>
    )
 

}

export default Navigation;

