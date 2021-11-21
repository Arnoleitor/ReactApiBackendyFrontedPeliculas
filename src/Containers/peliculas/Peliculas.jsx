import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Peliculas.css';
import { useNavigate } from 'react-router-dom';
import loading from '../../assets/img/Dual Ring-0.9s-204px.gif';
import store from '../../redux/store';
import { connect } from 'react-redux';

// import InfoPeliculas from '../InfoPeliculas/infoPeliculas';



const Peliculas = (props) => {

    let navigate = useNavigate();

    

    const [peliculas, setPeliculas] = useState([]);
    const [query, setQuery] = useState("")
    
    


    const recibirpeliculas = async () => {

        let token = props.credentials.token;



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
        console.log(props.credentials.user._id)


        const body = {
            
            titulo: pelicula.titulo,
            numero: pelicula._id,
            dependiente:"Tobi",
            fechaalquiler:new Date(),
            fechaentrega:new Date(),
            precioalquiler:`${Math.floor(Math.random() * (1000 - 100) + 100) / 100}€`,
            usuarioid: props.credentials.user._id

        
            
        }
            console.log(body)
            
        
        

        let token = props.credentials.token;
                    let config = {
                        headers: { Authorization: `Bearer ${token}`}
                    };

        let res = await axios.post("https://proyectopeliculasgeekshubs.herokuapp.com/pedidos",  body, config);
        
        console.log("respuesta", res)
        
    }


    

    if (peliculas[1]?.titulo) {
        console.log("Recibiendo Peliculas", peliculas)
        
        return (
            <div className="Estrenos"><h1 className="tituloPeliculas">Los mejores estrenos 2021</h1>
               <h5 className="buscatupelicula">🎥 BUSCA TU PELICULA 🎥</h5> <input id="buscador" placeholder ="Busqueda de peliculas" onChange={event => setQuery(event.target.value)}/>
                
                    
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

export default connect((state)=>({
    credentials: state.credentials,
}))(Peliculas);