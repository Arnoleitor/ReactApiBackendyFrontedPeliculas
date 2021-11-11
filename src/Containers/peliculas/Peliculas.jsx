import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import './Peliculas.css';
import {useNavigate} from 'react-router-dom';
import loading from '../../assets/img/Dual Ring-0.9s-204px.gif';

const Peliculas = () => {

    let navigate = useNavigate();


    const [peliculas, setPeliculas] = useState([]);

    const recibirpeliculas = async () => {

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkRUVOWDhiRTV1SVFIUEouWUJodEIudXF6U2FJWEFIZnpCbmZ0cS51Y0Y3NXQwMXRCZ0FUdlciLCJyb2wiOiJhZG1pbiIsIl9pZCI6IjYxOGNkNDYwNDg4ZTAxMzNhYWE0NTYzMyIsImNyZWF0ZWRBdCI6IjIwMjEtMTEtMTFUMDg6Mjk6MjAuMjgwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMTEtMTFUMDg6Mjk6MjAuMjgwWiIsIl9fdiI6MH0sImlhdCI6MTYzNjYxOTM2MCwiZXhwIjoxNjM2ODM1MzYwfQ.qlC2NDrPYPIoZ5l0Yntbwp566iJ8GQlCMoGyF6fAMD4';
  

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