import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import './Peliculas.css';
import {useNavigate} from 'react-router-dom';
import loading from '../../assets/img/Dual Ring-0.9s-204px.gif';

const Peliculas = () => {

    let navigate = useNavigate();


    const [peliculas, setPeliculas] = useState([]);

    const recibirpeliculas = async () => {

    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYXJub2xkQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGpWWUtoT2c3VXNOTlBLZkJlcW9abC5xZ1U1RTYvbzFsbU1DMllmQ3NrcDJKa2xxNktNMDguIiwicm9sIjoiYWRtaW4iLCJfaWQiOiI2MTg4ZTI0YTA1MmVhYWQyODMyZmM1ZTAiLCJjcmVhdGVkQXQiOiIyMDIxLTExLTA4VDA4OjM5OjM4LjgzNVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTExLTA4VDA4OjM5OjM4LjgzNVoiLCJfX3YiOjB9LCJpYXQiOjE2MzYzNjA3NzgsImV4cCI6MTYzNjU3Njc3OH0.CWo2_qAMQMD6FOKE3l2lz-Ze1WcnXBgdw-ErnmsuU-M';
  

    let config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        let res = await axios.get('https://proyectopeliculas.herokuapp.com/peliculas', config);
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