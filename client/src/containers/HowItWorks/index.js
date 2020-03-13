import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#192a56',
    color: 'white',
    marginTop: '1em',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    marginTop: '1em'
  },
  phoneImg: {
    maxWidth: '50px',
    margin: '2em 0',
  },
  paragraph: {
    padding: '0 19%'
  }
})

const HowItWorks = (props) => {
  const classes = useStyles()
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          How It Works
        </Typography>
        <div>
          <img
            className={classes.phoneImg}
            src={require('../../img/phone.png')}
            alt="phone" />
        </div>
        <Typography className={classes.paragraph} display="block" variant="caption">
          We are always working on new ways to help you, so over time you'll see new tiles appear in your feed.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default HowItWorks