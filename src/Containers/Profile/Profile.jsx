
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
            <div className="recuadroperfil">
            <br></br>
            {datosPerfil.nombre}
            <br></br>
            {datosPerfil.email}
            <br></br>
            {datosPerfil.rol}
           
        </div></div>
    )
};

export default Profile;