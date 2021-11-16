import './InfoPeliculas.css';
import React from 'react';
import '../../Containers/peliculas/Peliculas';
import { ESCOGE_PELICULA } from '../../redux/types';

props.dispatch({type:ESCOGE_PELICULA,payload:datos});

const InfoPeliculas = () => {

    return (
        <div class='InfoPeliculasStyle'></div>
    )
};

export default InfoPeliculas;