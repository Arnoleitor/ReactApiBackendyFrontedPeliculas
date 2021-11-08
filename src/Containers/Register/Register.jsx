
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {

    let history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [user, setUser] = useState({
        // name: '',
        // surname: '',
        // dni: '',
        email: '',
        // address: '',
        // city: '',
        // cp: 0,
        password: '',
        // password2: '',
        // phone: ''
    });

    //Manejadores o Handlers

    const userHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    //useEffect

    useEffect(() => {
        //UseEffect que se ejecuta sólo una vez al montarse. (1a vez).

    }, []);

    useEffect(() => {
        //UseEffect que se ejecutará CADA VEZ que se actualize el estado.(renderizando de nuevo).
    });

    //Funciones

    const enviaDatosRegistro = async () => {
        //Comprobación de errores en los datos

        if (! /[a-z]/gi.test(user.email) ) {
           setmsgError("Nombre Incorrecto");
           return;
        };
        
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(user.email) ) {
           setmsgError("Email Incorrecto");
           return;
        };

        //Generación del body
        let body = {
            // name: user.name,
            // surname: user.surname,
            // dni: user.dni,
            email: user.email,
            // address: user.address,
            // city: user.city,
            // cp: user.cp,
            password: user.password,
            // password2: user.password2,
            // phone: user.phone
        }

        //Conexion a axios y envio de datos
        console.log("ENVIANDO DATOS AL BACKEND ....",body);

        
        try {

            let res = await axios.post("https://proyectopeliculas.herokuapp.com/usuario/signup", body);

            //Guardado de datos en localStorage
            

        } catch (error) {
            console.log(error)
        }


        

        setmsgError("Usuario registrado con éxito,te redirecciono a la pagina de Login");
        
        setTimeout(()=>{
            history("/Login");
        },4000);
    };


    //Renderizado
    return (
        <div className="designRegister">
            <h1 classname="registro">Registro</h1>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            {/* <input type='text' name='name' title='name' onChange={userHandler} lenght='30' placeholder='Nombre' /> */}
            {/* <input type='text' name='surname' title='surname' onChange={userHandler} lenght='30' placeholder='Apellido' />
            <input type='text' name='dni' title='dni' onChange={userHandler} lenght='10' placeholder='DNI' /> */}
            <input type='email' name='email' title='email' onChange={userHandler} lenght='30' placeholder='Email' />
            {/* <input type='text' name='address' title='address' onChange={userHandler} lenght='30' placeholder='Direccion' />
            <input type='text' name='city' title='city' onChange={userHandler} lenght='30' placeholder='Ciudad' />
            <input type='number' name='cp' title='cp' onChange={userHandler} lenght='5' placeholder='C.Postal' /> */}
            <input type='text' name='password' title='password' onChange={userHandler} lenght='30' placeholder='Password' />
            {/* <input type='text' name='password2' title='password2' onChange={userHandler} lenght='30' placeholder='Repite Password' />
            <input type='text' name='phone' title='phone' onChange={userHandler} lenght='20' placeholder='Teléfono' /> */}
            <div className="botonSend" onClick={() => enviaDatosRegistro()}>Registrame</div>
            <div>{msgError}</div>
        </div>
    )
};

export default Register;