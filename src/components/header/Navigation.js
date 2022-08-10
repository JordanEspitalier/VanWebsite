import { useState } from "react";
import { Link } from "react-router-dom";



function Navigation(){
    let [fontSize, setFontSize] = useState("22px")
    const logScroll = (e) => {

        window.scrollY > 50 ? setFontSize("16px") : setFontSize("22px")
    }
    window.addEventListener('scroll', logScroll)

    return (
        <nav className="nav" style={{fontSize : fontSize}}>
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
        </nav>
    )
 

}

export default Navigation;

