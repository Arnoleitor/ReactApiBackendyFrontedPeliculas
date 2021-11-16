
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import axios from 'axios';



const Profile = (props) => {

    

    const [msgError, setmsgError] = useState("");
    const [userData, setUserData] = useState(props.credentials.user);
   

    const manejaInputs = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const update = async () => {
        props.dispatch({ type: UPDATE_USER, payload: userData });
        console.log("aqui llego")
        
        let token = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };
        
        try {

            let res = await axios.put(`https://proyectopeliculasgeekshubs.herokuapp.com/usuario/${userData._id}`,userData, token);
            setmsgError(`Datos actualizados ${res.data.user.body}....`);
            
            
            //redireccionar a otra O MOSTRAR MENSAJE DE ACTUALIZACIÓN

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

   

    if (props.credentials?.token !== '') {
        return (
            
            
            <div className="designProfile">
                <div className="cuadrado1">
                    <div className="user"><input id="nombre" placeholder="Introduce nuevo nombre" value={userData?.nombre || ""} name="nombre" onChange={manejaInputs} /></div>
                    <div className="user"><input id="email" placeholder="Introduce nuevo email" value={userData?.email || ""} name="email" onChange={manejaInputs} /></div>
                    {/* <div className="user"><input id="contraseña" placeholder="introduce nueva contraseña" value={userData?.password || ""} name="password" onChange={manejaInputs}/></div> */}
                    <div className="update" onClick={() => update()}>ACTUALIZAR</div>
                    

                </div>
                <div className="recuadroperfilInfo">
                <h5 className="datosperfil">Datos de perfil</h5>
                <div>Nombre:      {props.credentials.user.nombre}</div>
                <div>Email:       {props.credentials.user.email}</div>
                <div>Rol:         {props.credentials.user.rol}</div>
                <div>Pedidos:     {props.credentials.user.pedidos}</div>
                
                <div id="logout" onClick={() => logOut()}>LOGOUT</div>
                </div>
                {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
                
               {/* <div className="user">{props.credentials?.user?.apellidos}</div> */}
                
                
                {/* <div className="user">{props.credentials?.user?.telefono}</div>
                <div className="user">{props.credentials?.user?.direccion}</div> */}
                
                
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