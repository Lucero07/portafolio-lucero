import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from '../components/header'
import rally from '../images/rally.png'
import viacare from '../images/viacare.png'
import hyundai from '../images/hyundai.png'
import decido from '../images/decido.png'
import muertos from '../images/muertos.png'
import poke from '../images/poke.png'
import recetas from '../images/recetas.png'
import radar from '../images/consola.png'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ButtonBase from '@material-ui/core/ButtonBase'

import Button from '@material-ui/core/Button'

const images = [
  {
    img: recetas,
    title: 'Recetas favoritas',
    author: 'Lucero',
    description: 'PWA que utiliza la API de MealDB para mostrar recetas con sus instrucciones. Algunas de las features que tiene son: Soporte Offline con Workbox, Estrategias de Red apropiadas para cada recurso, Add to Home Screen, Web Share API,  Creado con Create React App.',
    width: '45%',
    sitio: 'https://pwa-ecru.vercel.app/'
  },
  {
    img: hyundai,
    title: 'Sitio web Hyundai Steel',
    author: 'Lucero',
    description: 'El proyecto lo realice con apoyo de Wordpress, lo diseñe, desarrolle y coloque en la red.',
    width: '45%',
    sitio: 'http://hyundai-steel.mx/sobre-nosotros/'
  },{
    img: rally,
    title: 'Rally Mexico',
    author: 'Lucero',
    description: 'Implementación de nuevo diseño y optimizacion del sitio web.',
    width: '45%',
    sitio: 'https://www.rallymexico.com/'
  },
  {
    img: viacare,
    title: 'viacare',
    author: 'Lucero',
    description: 'Personalice y optimice un template',
    width: '45%',
    sitio: 'https://viacare-intensivpflege.de/#:~:text=Leistungen'
  },

  {
    img: decido,
    title: 'Yo decido',
    author: 'Lucero',
    description: 'Es una plataforma que integra instituciones públicas y privadas para la prevención del aborto. Logro: Tercer Lugar',
    width: '45%',
    sitio: 'https://lucero07.github.io/yoDecido/'
  },
  {
    img: poke,
    title: 'Pokemon',
    author: 'Lucero',
    description: 'El proyecto lo realice con apoyo de Wordpress, lo diseñe, desarrolle y coloque en la red.',
    width: '45%',
    sitio: 'https://vue-js-pokemon.herokuapp.com/'
  },
  {
    img: radar,
    title: 'Radar',
    author: 'Lucero',
    description: 'Desarrollé la interfaz del producto Radar. Es un sistema de monitoreo y notificación del estatus de envíos con diferentes paqueterías. Utilice React.js, isomorphic fetch, react context, material-ui, next.js, considerando la experiencia de usuario y optimizando el performance del sitio de acuerdo a la evaluación con Google Analytics y Google Tag Manager. En este proyecto utilice la metodología Agile.',
    width: '45%',
    sitio: ''
  },
  {
    img: muertos,
    title: 'Día de muertos',
    author: 'Lucero',
    description: 'El objetivo de este proyecto era mostrar una parte de México a un grupo de desarrolladores de Kansas.',
    width: '45%',
    sitio: 'https://lucero07.github.io/Knowing-Mexico/'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 700,
    margin: '1%',

    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 400,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid #E76368',
      background: 'linear-gradient(135deg, rgba(163,38,197,0.7) 67%, rgba(231,99,104,1) 100%);',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
 
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Title text='Proyectos'/>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.img})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <span className={classes.imageTitle}>
              <Typography
                component="h4"
                variant="h4"
                color="inherit"

              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
              <Typography
                component="h4"
                variant="subtitle1"
                color="inherit"
              >
                {image.description}
                <span className={classes.imageMarked} />
              </Typography>
              <Button
              href={image.sitio}
              target='_blank'
                variant="outlined"
                color="inherit"
                className={classes.button}
                endIcon={<VisibilityIcon />}
              >
                Visitar el sitio
              </Button>
            </span>

          </span>
        </ButtonBase>
      ))}
    </div>
  );
}



/*
const useStyles = makeStyles((theme) => ({
  sizeImagen: {
    width: '100%',
  },
}));

const tileData = [
  {
    img: hyundai,
    title: 'Sitio web Hyundai Steel',
    author: 'Lucero',
    description: 'El proyecto lo realice con apoyo de Wordpress, lo diseñe, desarrolle y coloque en la red.'
  },
  {
    img: poke,
    title: 'Imagepoke de Javascript',
    author: 'Lucero'
  },
  {
    img: viacare,
    title: 'viacare basica',
    author: 'Lucero'
  },
  {
    img: recetas,
    title: 'recetas y recetashub',
    author: 'Lucero'
  },
  {
    img: rally,
    title: 'Image',
    author: 'Lucero'
  }
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={1}>
        <Title text='Proyectos' />
            {tileData.map((tile) => (
              <Grid item xs={12} md={4} lg={3} key={tile.img} >
                <Card className={ classes.maxWidth}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Lucero Ramos"
                      image={tile.img}
                      title="Lucero Ramos"
                      top
                    />
                    <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{tile.title}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{tile.description}</Typography>
            <Typography variant="body2" color="textSecondary" component="p"><GitHubIcon /> <VisibilityIcon /></Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
      </Grid>
    </div>
  );
}
 */