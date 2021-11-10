
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { LOGOUT } from '../../redux/types';

const Profile = (props) => {

    const logOut = () => {
    //Hook 
    // const [datosPerfil, setDatosPerfil] = useState(JSON.parse(localStorage.getItem("datosLogin")));
        props.dispatch({type:LOGOUT});
    }
    // useEffect(()=>{
    //     // console.log(datosPerfil)
    // },[])
    if(props.credentials?.token !== ''){
    return (
        <div className="designProfile">
                <div className="user">{props.credentials?.user?.nombre}</div>
                {/* <div className="user">{props.credentials?.user?.apellidos}</div>
                <div className="user">{props.credentials?.user?.ciudad}</div> */}
                <div className="user">{props.credentials?.user?.email}</div>
                {/* <div className="user">{props.credentials?.user?.telefono}</div>
                <div className="user">{props.credentials?.user?.direccion}</div> */}
                <div className="user" onClick={()=>logOut()}>LOGOUT</div>
            </div>
            
        
    )
    }else {
        return (
            <div className="designProfile">
                Usuario deslogeado con exito &#128513;
            </div>
        )
}};

export default connect((state)=>({
    credentials: state.credentials
}))(Profile);