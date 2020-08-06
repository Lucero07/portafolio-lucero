import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  dotColor: {
    background: '#E76368',
  },
  secondaryTail: {
    backgroundColor: '#A326C5',
  },
  alignRight: {
    textAlign: "justify !important",
  },
  alignLeft: {
    textAlign: "justify",
  }
}))

export default function CustomizedTimeline() {
  const classes = useStyles()

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Oct 2019 - Abr 2020
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Monterrey, NL
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.dotColor}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent className={classes.alignRight}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5" component="h1">
              SkydropX
            </Typography>
            <ul>
              <li><Typography>Desarrollé la interfaz del producto Radar.
              Es un sistema de monitoreo y notificación del estatus de envíos con diferentes paqueterías. Utilice React.js, isomorphic fetch, react context, material-ui, next.js, considerando la experiencia de usuario y optimizando el performance del sitio de acuerdo a la evaluación con Google Analytics y Google Tag Manager. En este proyecto utilice la metodología Agile.
            </Typography></li>
              <li>
                <Typography>Colaboré en el rediseño de la interfaz de Listify.
                  Es una herramienta de conexión entre diferentes marketplaces e inventarios desarrollado con Vue.js, axios, nuxt y vuetify.</Typography>
              </li>
            </ul>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Feb 2019 - Oct 2019
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Monterrey, NL
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.dotColor}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent className={classes.alignRight}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5" component="h1">
              Nocnok
            </Typography>
            <ul>
              <li>
                <Typography>Colaboré con el desarrollo de la interfaz del CRM inmobiliario, en vistas de estadísticas, pipeline y dashboard de clientes  y detalle de su proceso desarrollado con Vue.js, axios, vuex, vue router y vuetify. Este proyecto se dessarrollo con la metodología de Scrum.</Typography>
              </li>
              <li>
                <Typography>Mejoramiento del SEO de landing pages de cada producto agregando Google Tag Manager y usando semántica. Este proyecto se dessarrollo con la metodología de Kanban</Typography>
              </li>
            </ul>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           Sep 2017 - Feb 2019
          </Typography>
          <Typography variant="body2" color="textSecondary">
            CDMX,MX
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.dotColor}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent className={classes.alignRight}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5" component="h1">
              Garritz
            </Typography>
            <ul>
              <li>
                <Typography>Desarrollé sitios web utilizando Wordpress, diseñando templates personalizados para clientes de diversas industrias.</Typography>
              </li>
              <li>
                <Typography>Optimicé proyectos de Single Page Application.
Elaboré landing pages</Typography>
              </li>
              <li>
                <Typography>Elaboré landing pages</Typography>
              </li>
            </ul>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  )
}
