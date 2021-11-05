
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {

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

            let res = await axios.post("https://proyectopeliculas.herokuapp.com/usuario/signin", body);
            setmsgError(`inicio de sesión correcto ${res.data.user.email}....`);
            console.log("respuesta",res)
            localStorage.setItem("datosLogin", JSON.stringify(res.data.user));

            setTimeout(() => {
                history("/Home");
            }, 4000);
        } catch (error) {
            setmsgError("Usuario o Password incorrecto");

        }

    }


    return (

        <div className="designLogin">
            <h1>Inicio de Sesión</h1>
            {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
            <input placeholder="ejemplo@email.com"type='email' name='email' title='email' onChange={manejadorInputs} lenght='30' />
            <input placeholder="introduce contraseña"type='password' name='password' title='password' onChange={manejadorInputs} lenght='30' />
            <div className="sendButton" onClick={() => logeame()}>Login</div>
            <div className="error">{msgError}</div>
        </div>
    )
};

export default Login;