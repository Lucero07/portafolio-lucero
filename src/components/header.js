import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    color: '#47167d',
    display: 'flex',
    padding: '8px',
    justifyContent: 'center',
    border: '1px solid #000000',
    borderRadius: '5px',
    boxShadow: '4px 4px 5px -5px rgba(0,0,0,0.75)',
  },
}))

export default function SimpleAlerts(props) {
  const classes = useStyles()
  console.log(props)
  return (
    <div className={classes.root}>
      <Typography variant='h4'>{props.text}</Typography>
    </div>
  )
}
