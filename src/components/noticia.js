import React , {useEffect, useState} from 'react'
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    
  });

const Noticia = noticia => {


    const classes = useStyles();
    const [imagen, guardarImagen] = useState([]);
    
    useEffect(() => {
    const obtenerImagen = async () =>{
        
        const urlImagen = `http://mundialitouy.com/wp-json/wp/v2/media/${noticia.noticia.featured_media}`;
        const imagen = await axios.get(urlImagen);
        guardarImagen(imagen.data.source_url)
    }
    
    obtenerImagen();

    },[]);

    
    
    
    return ( 
        <Card className={classes.card} >
            <CardActionArea>
                <CardMedia
                component="img"
                alt={noticia.noticia.title.rendered}
                height="100%"
                image={imagen.length === 0 ? '/' : imagen}
                title={noticia.noticia.title.rendered}
                />  
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {noticia.noticia.title.rendered}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: `${noticia.noticia.excerpt.rendered}` }}>
                </div>
                </CardContent>
            </CardActionArea>
    </Card>
     );
}
 
export default Noticia;