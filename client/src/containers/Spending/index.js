import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1rem',
    backgroundColor: '#22d0a5',
    flexGrow: 1,
    textAlign: 'center'
  },
  spent: {
    marginTop: '1em',
    textAlign: 'center'
  },
  moneySpent: {
    color: 'white'
  },
  coinImg: {
    maxWidth: '50px',
    margin: '1em 0'
  }
}))

const Spending = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.spent} color="textSecondary">
          You spent <span className={classes.moneySpent}>$80.88</span> <br />
          the last few days
        </Typography>
        <img className={classes.coinImg} src={require("../../img/coin.png")} alt="coin" />
        <Typography variant="body2" component="p">
          You are on track.
        </Typography>
      </CardContent>
    </Card>
    /* {
      <div className="spending col-md-4 col-sm-6 card py-4 shadow bg-green">
      <p className="text-center p-bigger mb-0">
        You spent <span className="text-white">$80.96</span>
        <br /> the last few days
      </p>
      <div className="text-center my-3">
        <img
          className="img-responsive coin-img text-center"
          src={require('../../img/coin.png')}
          alt="coin img" />
      </div>
      <p className="text-center">You are on track.</p>
    </div>
    } */
    
  )
}

export default Spending