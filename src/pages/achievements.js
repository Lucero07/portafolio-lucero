import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import comoniña from '../images/comonina.jpeg'
import paypal from '../images/paypal.jpg'
import ux from '../images/ux.jpeg'
import Title from '../components/header'
import programacion from '../images/basica.png'
import frontend from '../images/frontend.png'
import fundamentos from '../images/fundamentos.png'
import git from '../images/git.png'
import web from '../images/web.png'



const useStyles = makeStyles((theme) => ({
  sizeImagen: {
    width: '100%',
  },
}))

const tileData = [
  {
    img: frontend,
    title: 'Frontend Developer',
    author: 'Lucero'
  },
  {
    img: fundamentos,
    title: 'ImageFundamentos de Javascript',
    author: 'Lucero'
  },
  {
    img: web,
    title: 'Web Online',
    author: 'Lucero'
  },
  {
    img: programacion,
    title: 'Programacion basica',
    author: 'Lucero'
  },
  {
    img: git,
    title: 'Git y Github',
    author: 'Lucero'
  },
  {
    img: comoniña,
    title: 'Image',
    author: 'Lucero'
  },
  {
    img: paypal,
    title: 'Image',
    author: 'Lucero'
  },
  {
    img: ux,
    title: 'Image',
    author: 'Lucero'
  },
];

export default function ImageGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Grid container spacing={1}>
        <Title text='Logros' />
        {tileData.map((tile) => (
          <Grid item xs={12} md={4} lg={3} key={tile.img} >
            <img className={classes.sizeImagen} src={tile.img} alt={tile.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
