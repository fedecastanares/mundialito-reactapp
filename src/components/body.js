import React, {Fragment} from 'react';
import ListaNoticias from './listanoticias.js'

const Body = ({value, equipo, division}) => {

    // equipo y division se pasan para despues usar filter

    switch (value){
        case 0:
            return (<ListaNoticias
            equipo={equipo}
            divisio={division}/>);
         case 1:
             return (<h1>Tablas</h1>);
         case 2:
            return (<h1>Goleadores</h1>);
         case 3:
             return (<h1>Amarillas</h1>);
         case 4:
             return (<h1>Rojas</h1>);
         default :
             return (<h1>Ocurrio un error leyendo el header</h1>);}}
export default Body;