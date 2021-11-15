
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';
import './Login.css';


const Login = (props) => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const logeame = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://proyectopeliculasgeekshubs.herokuapp.com/usuario/signin", body);
            setmsgError(`inicio de sesión correcto ${res.data.user.nombre}....`);
            console.log("respuesta",res)
            
            // localStorage.setItem("datosLogin", JSON.stringify(res.data.user));

            let datos = res.data;
            
            props.dispatch({type:LOGIN,payload:datos});
            console.log(datos)
            
            setTimeout(() => {
                history("/Peliculas");
            }, 1500);
        } catch (error) {
            setmsgError("Usuario o Password incorrecto");

        }

    }


    return (
        
        <div className="designLogin">
            <h1 className="iniciosesion">Inicio de Sesión</h1>
            {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
            <input id="relleno1" placeholder="Ejemplo@email.com"type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' />
            <input id="relleno2" placeholder="Introduce contraseña"type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' />
            <div className="sendButton" onClick={() => logeame()}>Iniciar sesión</div>
            <div className="error">{msgError}</div>
        </div>
        
    )
};

export default connect()(Login);