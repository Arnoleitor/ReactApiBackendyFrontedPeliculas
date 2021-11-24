import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import { LOGOUT, UPDATE_USER } from '../../redux/types';
import './Admin.css';
// import profile from '../../images/profile.png';
const Admin = (props) => {
    const [datosusuario, setdatosusuario] = useState("");
    const [datospedidos, setdatospedidos] = useState("");
    useEffect(() => {
        
        takeusers();
        takepedidos();
    }, [])
    const takeusers = async () => {
        try {
            let res = await axios.get("https://proyectopeliculasgeekshubs.herokuapp.com/usuario");
            setdatosusuario(res.data);
            
        } catch (error) {
            console.log(error);
        }
    };
    const takepedidos = async () => {
        try {
            let res_pedidos = await axios.get("https://proyectopeliculasgeekshubs.herokuapp.com/pedidos",  {
                headers:{
                    'Authorization': `Bearer ${props.credentials.token}`
                    
                }
            });
            setdatospedidos(res_pedidos.data);
            
        } catch (error) {
            console.log(error);
        }
    };
    if (props.data_user?.token !== '') {
        
        return (
            <div className="main-container">
                <div className="main-container-one">
                    <h1 className="admin-h1"></h1>
                    <div className="">
                        <h2 className="text-center mt-2">Últimos usuarios registrados </h2>
                        {datosusuario.length > 0 &&
                            <div>
                            <div className="users-registers-title">
                            <p className="colum-components-admin-print" >Nombre</p>
                            <p className="colum-components-admin-print" >Email</p>
                            <p className="colum-components-admin-print" >Id</p>
                            </div>
                            <div id="table-home-print">
                                <div className="colum-home-print">
                                    {datosusuario.map(run => {
                                        return (
                                            <p className="colum-components-admin-print-register" key={run._id}>
                                                {run.nombre}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="colum-home-print">
                                    {datosusuario.map(run => {
                                        return (
                                            <p className="colum-components-admin-print-register" key={run._id}>
                                                {run.email}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="colum-home-print">
                                    {datosusuario.map(run => {
                                        return (
                                            <p className="colum-components-admin-print-register" key={run._id}>
                                                {run._id}
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                            </div>
                        }
                    </div>
                    <div>
                        <div>
                            <h2>Pedidos Usuarios</h2>
                            <div className="last-order-titles">
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">ID usuario</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Fecha pedido</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Vendedor</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Pelicula</p></div>
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">ID Pelicula</p></div>
                            </div>
                            {datospedidos.length > 0 &&
                                <div id="table-home-print">
                                    <div className="colum-home-print">
                                        {datospedidos.map(run => {
                                            
                                            return (
                                            <div className="table-print-pedidos">
                                                <div className="table-home-print-n-order">
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                   {run.usuarioid}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.createdAt}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                   {run.dependiente}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.titulo}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.numero}
                                                    </p>
                                                </div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
                )
    }
};
export default connect((state) => ({
                    credentials: state.credentials,
                    pedidos: state.pedidos,
}))(Admin);