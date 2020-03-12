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
    marginTop: '1rem'
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
          src={require('../../img/piggy-bank.png')} />
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
    /*<div className="loan col-md-4 col-sm-6 card shadow-sm">
      <div className="text-center containerInner mt-3 mb-1">
        <h6 className="d-inline font-weight-normal">
          I want to save <br /><br />for
        </h6>
        <button
          className="btn btn-outline-secondary d-inline"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample">
          long egg
          <img src={require('../../img/caret-down.png')} className="caret-down" alt="caret-down" />
        </button>
        <div className="text-center my-4">
          <img
            className="img-responsive piggy-bank-img text-center"
            src={require('../../img/piggy-bank.png')}
            alt="coin img" />
        </div>
        <div className="mt-4">
          <h5 className="font-weight-normal">Earn 1.70%</h5>
          <small className="disclaimer">
            Annual Percentage Yield
            <a href="#!">Learn More</a>
          </small>
          <button className="mt-2 btn btn-block btn-learn-more">
            Learn More
          </button>
        </div>
      </div>
    </div>
  */
  )
}

export default Loan