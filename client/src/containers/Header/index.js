import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '45px 0!important',
    background: '#480048',
    background: '-webkit-linear-gradient(to bottom, #C04848, #480048)',
    background: 'linear-gradient(to right, #C04848, #480048)',
    color: 'white',
    textAlign: 'center',
    // todo: display block in mobile, none sm and up
  },
  title: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.4)'
  },
  message: {
    fontSize: '1.2rem',
    lineHeight: '1.5rem',
    padding: '0 20%',
  }
})

const Header = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Welcome, Matthew
        </Typography>
        <Typography className={classes.message}>
          Take time to smell the compound interest.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Header