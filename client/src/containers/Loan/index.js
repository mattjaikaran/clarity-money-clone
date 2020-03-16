import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
  },
  btn: {
    margin: '1em 0',
  },
  piggy: {
    maxWidth: '60px',
    margin: '1em 0'
  },
  disclaimer: {
    marginTop: '1em',
    fontWeight: 300
  },
  learnMore: {
    marginTop: '10px',
    backgroundColor: 'black',
    color: 'white',
    padding: '1em',
    width: '100%',
    '&:hover': {
      background: '#22d0a5',
    }
  },
})

const Loan = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
          I want to save for <br />
          <Button className={classes.btn} variant="outlined" color="default">
            Long Egg
          </Button>
        </Typography>
        <img 
          className={classes.piggy}
          src={require('../../img/piggy-bank.png')} 
          alt="piggy bank" />
        <Typography variant="h5" component="h2">
          Earn 1.70%
        </Typography>
        <Typography className={classes.disclaimer} variant="caption" display="block" gutterBottom>
          Annual Percentage Yield <a href="#!">Learn More</a>
        </Typography>
        <CardActions>
          <Button className={classes.learnMore} size="small">Learn More</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Loan