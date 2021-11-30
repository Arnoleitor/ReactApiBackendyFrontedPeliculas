import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Boton from '../Boton/Boton';
import logo from '../../assets/img/netflix.png';
import { connect } from 'react-redux';
import profile from '../../assets/img/usuarioicono.png';



const Header = (props) => {
    const history = useNavigate();
    const llevame = () => {
        history("/");
    }
    console.log(props.credentials.user.nombre)
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
                <div id="admin">{props.credentials?.user.rol=='admin' && <Boton destino="Admin" url="/admin"/>}</div>
                <div className="icono-user-logeado">
                <img className="img-profile" src={profile} alt="profile"  />
                    {props?.credentials?.user?.nombre}
                    
                </div>
            </div>
        </div>
    )

};

// export default Header;
export default connect((state) => ({
    credentials: state.credentials
}))(Header);