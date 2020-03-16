import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '3.5em',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  },
  title: {
    padding: '2em'
  }
})

const ThankYou = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h4" component="h2">
          Thank You
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ThankYou