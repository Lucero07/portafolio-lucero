import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Timeline from '../components/timeline'
import Title from '../components/header'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  maxWidth: {
    maxWidth: '300px'
  }
}))

export default function FullWidthGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Title text='Experiencia'/>
          <Timeline />
        </Grid>
      </Grid>
    </div>
  )
}


