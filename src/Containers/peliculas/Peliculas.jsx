import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Peliculas.css';
import { useNavigate } from 'react-router-dom';
import loading from '../../assets/img/Dual Ring-0.9s-204px.gif';
import store from '../../redux/store';

// import InfoPeliculas from '../InfoPeliculas/infoPeliculas';



const Peliculas = () => {

    let navigate = useNavigate();

    

    const [peliculas, setPeliculas] = useState([]);
    const [query, setQuery] = useState("")
    
    


    const recibirpeliculas = async () => {

        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6ImFkbWluaXN0cmFkb3IiLCJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkOWhCSVhtSnByRVIybGNQNDQzSGgydXVzeVE5bEJBblFCbDZLTzA3RHB3ZFpCZXZKcHY1QU8iLCJyb2wiOiJhZG1pbiIsIl9pZCI6IjYxOWExNDZiNjY4ODhmOGRjYmYwOTFiMCIsImNyZWF0ZWRBdCI6IjIwMjEtMTEtMjFUMDk6NDI6MDMuMjk5WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTEtMjFUMDk6NDI6MDMuMjk5WiIsIl9fdiI6MH0sImlhdCI6MTYzNzQ4NzcyMywiZXhwIjoxNjM3NzAzNzIzfQ.mQGVutKgWKM1z0StBbXY0BXXSGEIRolLK4jboJek9Ng';



        let config = {
            headers: { Authorization: `Bearer ${token}`}
        };
        let res = await axios.get('https://proyectopeliculasgeekshubs.herokuapp.com/peliculas', config);
        setPeliculas(res.data)
        console.log(res)

    };

    useEffect(() => {
        setTimeout(() => {
            recibirpeliculas();
            store.subscribe(a=> console.log(store.getState()));
            console.log("hola")
        }, 1000);
    }, []);

    useEffect(() => {
        console.log(peliculas)

    });

    

    const eligePelicula = (escogida) => {
        console.log(escogida);
    }




    const alquilarPelicula = async (pelicula) => {
        console.log(pelicula)


        const body = {
            
            titulo: pelicula.titulo,
            numero: pelicula._id,
            dependiente:"Tobi",
            fechaalquiler:new Date(),
            fechaentrega:new Date(),
            precioalquiler:`${Math.floor(Math.random() * (1000 - 100) + 100) / 100}€`,
        
            
        }
            console.log(body)
            
            //redireccionar a otra O MOSTRAR MENSAJE DE ACTUALIZACIÓN
        
        

        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6ImFkbWluaXN0cmFkb3IiLCJlbWFpbCI6ImFkbWluaXN0cmFkb3JAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkOWhCSVhtSnByRVIybGNQNDQzSGgydXVzeVE5bEJBblFCbDZLTzA3RHB3ZFpCZXZKcHY1QU8iLCJyb2wiOiJhZG1pbiIsIl9pZCI6IjYxOWExNDZiNjY4ODhmOGRjYmYwOTFiMCIsImNyZWF0ZWRBdCI6IjIwMjEtMTEtMjFUMDk6NDI6MDMuMjk5WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTEtMjFUMDk6NDI6MDMuMjk5WiIsIl9fdiI6MH0sImlhdCI6MTYzNzQ4NzcyMywiZXhwIjoxNjM3NzAzNzIzfQ.mQGVutKgWKM1z0StBbXY0BXXSGEIRolLK4jboJek9Ng';
                    let config = {
                        headers: { Authorization: `Bearer ${token}`,'Content-Type' : 'aplication/json','access-control-allow-origin':'*'}
                    };

        let res = await axios.post("https://proyectopeliculasgeekshubs.herokuapp.com/pedidos",  body,{headers: { Authorization: `Bearer ${token}`,'Content-Type' : 'application/json',accept:'application/json','access-control-allow-origin':'*'}});
        
        console.log("respuesta", res)
        
    }


    

    if (peliculas[1]?.titulo) {
        console.log("Recibiendo Peliculas", peliculas)
        
        return (
            <div className="Estrenos"><h1 className="tituloPeliculas">Los mejores estrenos 2021</h1>
                <input placeholder ="Busqueda de peliculas" onChange={event => setQuery(event.target.value)}/>
                
                    
                    <div className="mostrarpeliculas">
                    
                

                    {
                        peliculas.filter((pelicula) =>{
                            if (query === '') {
                            return pelicula;
                            } else if (pelicula.titulo.toLowerCase().includes(query.toLowerCase())) {
                            return pelicula;
                             }
                            }).map((pelicula, index) => {
                            return <div key={index} onClick={() => eligePelicula(pelicula)} className="Peliculas"><p className="parrafo">{pelicula.titulo}</p><div><button classname="alquiler" onClick={() => alquilarPelicula(pelicula)}>Alquilar</button></div></div>
                        })

                    }

                </div></div>

        )
    } else {

        return (
            <div>
                <img className="loader" src={loading} />
            </div>

        )
    }
};

export default Peliculas;