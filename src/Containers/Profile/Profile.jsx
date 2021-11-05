
import React, {useState, useEffect} from 'react';

import './Profile.css';

const Profile = () => {

    //Hook 
    const [datosPerfil, setDatosPerfil] = useState(JSON.parse(localStorage.getItem("datosLogin")));

    useEffect(()=>{
        console.log(datosPerfil)
    },[])

    return (
        <div className="designProfile">
            {datosPerfil.nombre}
            <br></br>
            {datosPerfil.email}
            <br></br>
            {datosPerfil.rol}
            <br></br>
            Humano
        </div>
    )
};

export default Profile;