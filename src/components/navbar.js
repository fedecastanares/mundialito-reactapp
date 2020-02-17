import React , {Fragment} from 'react'
import logof5 from '../assets/img/f5.svg'
import logof8 from '../assets/img/f8.svg'
import banner from '../assets/img/banner.PNG'
import Body from '../components/body.js'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


// Pestañas
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Input

import TextField from '@material-ui/core/TextField';
import GroupIcon from '@material-ui/icons/Group';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



// Iconos
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [division, setdivision] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [equipo, setequipo] = React.useState('');
  const [liga, setliga] = React.useState('todas');

  const handleChange = (event, newValue) => {
    if (event.target.name === 'equipo') {
      setequipo(event.target.value)
    } 
    else if (event.target.name === 'division') {
      setdivision(event.target.value)
    } 
    else if (event.target.name === 'logo') {
      setliga(event.target.alt.substr(-2,2))
    }
     else {
      setValue(newValue)
    } ;
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="sticky" color='inherit'>
          <Toolbar>
            <Container fixed>

              <div className='margen'>
                <Grid container 
                  spacing={3} 
                  justify='space-between'>
                  <Grid container 
                    direction="row" 
                    xs={2} 
                    justify='flex-start'
                    alignItems='center'
                    alignContent='center'>
                    <img className='logo' src={banner} alt='Logo de mundialitouy' />
                    </Grid>
                    <Grid container 
                      xs={8} 
                      direction="row"
                      justify='flex-end'
                      alignItems='center'
                      alignContent='center'
                    >
                      <img src={logof5} alt='Logo de futbol f5' name='logo' onClick={handleChange}/>
                      <img src={logof8} alt='Logo de futbol f8' name='logo' onClick={handleChange}/>
                      <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </div>

            <Grid container spacing={2} alignItems='center'>
            <Grid item xs>
              <Grid container alignItems='flex-end'>
                <Grid item xs={2}>
                    <GroupIcon />
                </Grid>
                <Grid item xs={10}>
                    <TextField id="standard-size-small" label="Equipo" color='secondary' fullWidth value={equipo} name='equipo' onChange={handleChange} />
                  </Grid>
                </Grid>
            </Grid>
            
            <Grid item xs>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel id="division">Divisiones</InputLabel>
                <Select
                  labelId="division"
                  id="division"
                  name='division'
                  value={division}
                  onChange={handleChange}
                >
                  <MenuItem value='viernes'>Viernes</MenuItem>
                  <MenuItem value='sabado'>Sabado</MenuItem>
                  <MenuItem value='domingo'>Domingo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            </Grid>


            <Grid container 
                  direction="row"
                  justify='space-around'
                  alignItems='flex-end'
                  alignContent='center'>
                <Tabs
                  className='tabla-sm'
                  value={value}
                  name='grupo'
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  centered
                >
                  <Tab icon={<LibraryBooksIcon/>} label='Noticias'/>
                  <Tab icon={<EmojiEventsIcon/>} label="Tablas" />
                  <Tab icon={<SportsSoccerIcon/>} label='Goleadores'/>
                  <Tab icon={<ChatBubbleIcon/>} label='Amarillas'/>
                  <Tab icon={<ChatBubbleIcon/>} label='Rojas'/>
                </Tabs>
            </Grid>
          </Container>
          </Toolbar>
        </AppBar>
      </div>
      <div className='margen'>
        <Body
        division={division}
        value={value}
        equipo={equipo}
        />
      </div>
    </Fragment>
  );
}
 
export default Navbar;