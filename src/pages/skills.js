import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Title from '../components/header'
import Chip from '@material-ui/core/Chip'
import DoneIcon from '@material-ui/icons/Done'
import ProgressWithLabel from '../components/progress'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  softSkill: {
    margin: '1rem 0'
  },
  softSkillColor: {
    color: 'rgba(163,38,197,1)',
    borderColor: 'rgba(231,99,104,1)'
  }
}))

export default function FullWidthGrid() {
  const classes = useStyles()
  const hardSkills = [
    {
      value: 90,
      text: 'Vanilla'
    },
    {
      value: 85,
      text: 'React.js'
    },
    {
      value: 90,
      text: 'Vue.js'
    },
    {
      value: 86,
      text: 'JQuery'
    },
    {
      value: 95,
      text: 'HTML5'
    },
    {
      value: 90,
      text: 'CSS3'
    },
    {
      value: 70,
      text: 'SASS'
    },
    {
      value: 70,
      text: 'Stylus'
    },
    {
      value: 75,
      text: 'Redux'
    },
    {
      value: 80,
      text: 'Vuex'
    },
    {
      value: 85,
      text: 'Axios'
    },
    {
      value: 85,
      text: 'Isomorphic fetch'
    },
    {
      value: 90,
      text: 'Express'
    },
    {
      value: 95,
      text: 'Material-ui'
    },
    {
      value: 90,
      text: 'Vuetify'
    },
    {
      value: 95,
      text: 'Boostrap'
    },
    {
      value: 80,
      text: 'Foundation'
    },
    {
      value: 85,
      text: 'Materialize'
    },
    {
      value: 80,
      text: 'UI-kit'
    },
    {
      value: 95,
      text: 'Github'
    },
    {
      value: 95,
      text: 'Bitbucket'
    },
    {
      value: 90,
      text: 'Heroku'
    },

  ]
  const softSkill = [
    {
      text: 'Metodología Agile'
    },
    {
      text: 'Scrum'
    },
    {
      text: 'Kanban'
    },
    {
      text: 'Autodidacta'
    },
    {
      text: 'Trabajo en equipo'
    },
    {
      text: 'Design thinking'
    },
    {
      text: 'Continuous delivery'
    },
    {
      text: 'Continuous deployment'
    },
    {
      text: 'BEM'
    },
    {
      text: 'Atomic Design'
    },
    {
      text: ' SMACSS'
    }
  ]

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Title text='Habilidades' />
        <Grid item xs={12} md={6}>
          <Title text='Duras' />
          <Grid container spacing={1}>
            {hardSkills.map((skill, index) => (
              <Grid item xs={12} md={6} lg={4}>
                <ProgressWithLabel value={skill.value} text={skill.text} key={`${index}_${skill.text}`} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Title text='Blandas' />
          <Grid container spacing={2} className={classes.softSkill}>
            {softSkill.map((skill, index) => (
              <Grid item xs={12} lg={4}>
                <Chip className={classes.softSkillColor} variant="outlined" size="medium" label={skill.text} deleteIcon={<DoneIcon />} onDelete={handleDelete} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}


