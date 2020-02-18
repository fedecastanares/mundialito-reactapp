import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Noticia from './noticia'

const ListaNoticias = (props) => {


    // Las noticias hay que sacarlas a un componente context para que sean de facil acceso y ademas no recarguen cada vez que se llama al componente con el switch
    const [noticias, leerNoticias] = useState([]);
    
    useEffect(() => {
        const obtenerNoticias = async () => {
            const url = 'http://mundialitouy.com/wp-json/wp/v2/posts';

            const noticias = await axios.get(url);

            leerNoticias(noticias.data);
        }

        obtenerNoticias();


    },[]);

    return ( 
        <Fragment>
            <Grid container 
            alignContent='center'
            alignItems='center'
            justify='space-around'
            >
                {noticias.map(noticia => (
                    <Grid item sm={3} xs={12}> 
                    <div className='margen'>
                        <Noticia
                        key={noticia.id} 
                        noticia={noticia}
                        /></div>
                    </Grid>
                ))}
            </Grid>
        </Fragment>
     );
}
 
export default ListaNoticias;