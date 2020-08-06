import React from 'react'
import PropTypes from 'prop-types'

import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    background: 'linear-gradient(135deg, rgba(2,0,36,1) 50%, rgba(163,38,197,1) 87%, rgba(231,99,104,1) 100%)',
  },
}))(LinearProgress)

const useStyles = makeStyles((theme) => ({
  labelProgress: {
    margin: ' 1rem 0'
  },
}))


BorderLinearProgress.propTypes = {
  value: PropTypes.number.isRequired
}

export default function LinealStatic(props) {
  const classes = useStyles()
  return(
    <div className={classes.labelProgress}>
      <Typography variant="h6" component="h6" color="textSecondary">{props.text}
        </Typography>
     <BorderLinearProgress variant="determinate" value={props.value} />
    </div>
     
     )
}
