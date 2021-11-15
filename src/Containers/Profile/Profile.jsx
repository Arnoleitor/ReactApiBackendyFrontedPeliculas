
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/dom';



const Profile = (props) => {

    let config = {
        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6InBvbGxvIiwiZW1haWwiOiJwb2xsb0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ3WFBEMWZiZnRWbjhka3lma0RlTDF1MW13dVlSeUIzdjRQWnJzSzNtUno1Y3lOaXdRUkMzTyIsInJvbCI6ImFkbWluIiwiX2lkIjoiNjE4ZTViNTI5YjYwODY3OGEwYWRiNTU2IiwiY3JlYXRlZEF0IjoiMjAyMS0xMS0xMlQxMjoxNzoyMi43ODdaIiwidXBkYXRlZEF0IjoiMjAyMS0xMS0xMlQxMjoxNzoyMi43ODdaIiwiX192IjowfSwiaWF0IjoxNjM2NzE5NDQyLCJleHAiOjE2MzY5MzU0NDJ9.myGBiHAj8i-4s2OmLLeBXqius0xlQY4YZYiDqWbcwWU" }
    };

    const [msgError, setmsgError] = useState("");
    const [userData, setUserData] = useState(props.credentials.user);
   

    const manejaInputs = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const update = async () => {
        props.dispatch({ type: UPDATE_USER, payload: userData });
        console.log("aqui llego")
        let body = {
            _id: "618e5b529b608678a0adb556",
            nombre: "pollo123",
            email: "pollo@gmail.com",
            contrasena: "12345678",
            rol: "admin",
            createdAt: "2021-11-02T16:09:46.538Z",
            updatedAt: "2021-11-02T16:09:46.538Z",
            __v: 0
        };

        
        try {
            console.log(body)

            let res = await axios.put("https://proyectopeliculasgeekshubs.herokuapp.com/usuario/update/618bfdc171d2c27899afb369", body,config);
            setmsgError(`Datos actualizados ${res.data.user.body}....`);
            console.log("respuesta", res);
            localStorage.setItem("datosLogin", JSON.stringify(res.data.user));

            let datos = res.data;

            props.dispatch({ type: UPDATE_USER, payload: datos });
            console.log(datos)

        } catch (error) {
            setmsgError("Fallo al actualizar datos");

        }

    }

    const logOut = () => {
        //Hook 
        // const [datosPerfil, setDatosPerfil] = useState(JSON.parse(localStorage.getItem("datosLogin")));
        props.dispatch({ type: LOGOUT });
    }


    useEffect(() => {
        setUserData(props.credentials.user);

    }, [props.credentials]);

    // useEffect(()=>{
    //     // console.log(datosPerfil)
    // },[])
    if (props.credentials?.token !== '') {
        return (
            <div className="designProfile">
                <pre>{JSON.stringify(userData, null, 2)}</pre>
                <div className="user"><input value={userData?.nombre || ""} name="nombre" onChange={manejaInputs} /></div>
                {/* <div className="user">{props.credentials?.user?.apellidos}</div>
                <div className="user">{props.credentials?.user?.ciudad}</div> */}
                <div className="user"><input value={userData?.email || ""} name="email" onChange={manejaInputs} /></div>
                {/* <div className="user">{props.credentials?.user?.telefono}</div>
                <div className="user">{props.credentials?.user?.direccion}</div> */}
                <div className="update" onClick={() => update()}>UPDATE</div>
                <div id="logout" onClick={() => logOut()}>LOGOUT</div>
            </div>


        )
    } else {
        return (
            <div className="designProfile">
                Usuario deslogeado con exito &#128513;
            </div>
        )
    };

    } 
    export default connect((state) => ({
        credentials: state.credentials
    }))(Profile);