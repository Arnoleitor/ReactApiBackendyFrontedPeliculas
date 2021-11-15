import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import './Peliculas.css';
import {useNavigate} from 'react-router-dom';
import loading from '../../assets/img/Dual Ring-0.9s-204px.gif';

const Peliculas = () => {

    let navigate = useNavigate();


    const [peliculas, setPeliculas] = useState([]);

    const recibirpeliculas = async () => {

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6InVzZXIxIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRGbUI1VHRhN1VFWmpiMXVzeWQvWlN1R1ZURndvVFNPcU9JSWtJSm9BRy40RS53UlRPLkJpRyIsInJvbCI6ImFkbWluIiwiX2lkIjoiNjE5MjE5NDgwNWE0ZDkzOTQxYzI4YTE1IiwiY3JlYXRlZEF0IjoiMjAyMS0xMS0xNVQwODoyNDo0MC4yMzhaIiwidXBkYXRlZEF0IjoiMjAyMS0xMS0xNVQwODoyNDo0MC4yMzhaIiwiX192IjowfSwiaWF0IjoxNjM2OTY0NjgwLCJleHAiOjE2MzcxODA2ODB9.Y9YXP5yazZjRmWgn0XRrBISgwFrwhYpqig0_v4Ltapw';
  

    let config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        let res = await axios.get('https://proyectopeliculasgeekshubs.herokuapp.com/peliculas', config);
        setPeliculas(res.data)
        console.log(res)
    };

    useEffect(() => {
        setTimeout(()=>{
        recibirpeliculas();
    },2000);
    }, []);

    useEffect(() => {
        console.log(peliculas)

    });


    if(peliculas[1]?.titulo){
        console.log("Recibiendo Peliculas",peliculas)
    return (
        <div className="Estrenos"><h1 className="tituloPeliculas">Los mejores estrenos 2021</h1>
        <div className="mostrarpeliculas">
            
            {
                peliculas.map((pelicula) => {
                    return <div key = {pelicula._id}className="Peliculas"><p className="parrafo">{pelicula.titulo}</p></div>
                })
            }

        </div></div>
    )
        }else {

                 return (
                         <div>
                                <img className="loader" src={loading}/>
                        </div>

        )
    }
};

export default Peliculas;