import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Admin.css';

const Admin = (props) => {
    const [datosusuario, setdatosusuario] = useState("");
    const [datospedidos, setdatospedidos] = useState("");
    const [borrarusuario, setdatosborrarusuario] = useState("");
    const [borrarpedidos, setdatosborrarpedidos] = useState("");

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

    const borrar = async (deletes) => {
       
        try {
            let res = await axios.delete(`https://proyectopeliculasgeekshubs.herokuapp.com/usuario/${deletes.borrado}`,);
            console.log(res)
            setdatosborrarusuario();
            
        } catch (error) {
            console.log(error);
        }

    };

    const borrarpedido = async (run) => {
       
        
        try {
            
            let res = await axios.delete(`https://proyectopeliculasgeekshubs.herokuapp.com/pedidos/${run.run._id}`,{
            headers:{
                'Authorization': `Bearer ${props.credentials.token}`
                
            }
        });
            setdatosborrarpedidos();
            
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
                        <h2 className="text-center mt-2">Usuarios Registrados </h2>
                        {datosusuario.length > 0 &&
                            <div>
                            <div className="users-registers-title">
                            <p className="colum-components-admin-print" >Nombre</p>
                            <p className="colum-components-admin-print" >Email</p>
                            <p className="colum-components-admin-print" >Id Usuario</p>
                            <p className="colum-components-admin-print" >Eliminar Usuarios</p>
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
                                <div className="colum-home-print">
                                    {datosusuario.map(run => {
                                        let borrado = run._id;
                                        return (
                                            <p onClick={() => borrar({borrado})} className="colum-components-admin-print-register" key={run._id}>
                                                <span className="borrar">Eliminar Usuario</span>
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
                                <div className="titles-of-last-orders"><p className="colum-components-admin-print-pedidos-titles">Eliminar Pedido</p></div>                                                                                      
                            </div>
                            {datospedidos.length > 0 &&
                                <div id="table-home-print">
                                    <div className="colum-home-print">
                                        {datospedidos.map(run => {
                                            let borrar = run._id;
                                            return (
                                            <div className="table-print-pedidos">
                                                <div className="ColumnasPrincipales">
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                   {run.usuarioid}
                                                    </p>
                                                </div>
                                                <div className="ColumnasPrincipales">
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.createdAt}
                                                    </p>
                                                </div>
                                                <div className="ColumnasPrincipales">
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                   {run.dependiente}
                                                    </p>
                                                </div>
                                                <div className="ColumnasPrincipales">
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.titulo}
                                                    </p>
                                                </div>
                                                <div className="ColumnasPrincipales">
                                                    <p className="colum-components-admin-print-pedidos" key={run._id}>
                                                    {run.numero}
                                                    </p>
                                                </div>
                                                <div className="ColumnasPrincipales">
                                                    <p onClick={() => borrarpedido({run})}  key={run._id}>
                                                <span className="borrar">Eliminar Pedido</span>
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
