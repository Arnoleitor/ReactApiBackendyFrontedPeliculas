import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Boton from '../Boton/Boton';
import logo from '../../assets/img/netflix.png';


const Header = () => {
    const history = useNavigate();
    const llevame = () => {
        history("/");
    }

    return(
        <div className="designHeader">
            <div>
                <img id="logo" src={logo} alt="logo" onClick={()=>llevame()} />
            </div>
            <div id="menu">
                <Boton destino="Home" url="/"/>
                <Boton destino="Perfil" url="/profile"/>
                <Boton destino="Registro" url="/register"/>
                <Boton destino="Login" url="/login"/>
                <Boton destino="Peliculas" url="/Peliculas"/>
                
            </div>
        </div>
    )

};

export default Header;