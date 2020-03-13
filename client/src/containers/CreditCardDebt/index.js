import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
    width: '100%',
    textAlign: 'center',
    color: 'white'
  },
  creditCard: {
    color: 'white',
    marginTop: '1em',
    padding: '2em',
  },
  logoContainer: {
    textAlign: 'left'
  },
  logo: {
    maxWidth: '30px'
  },
  balanceRow: {
    marginTop: '1em',
    textAlign: 'left'
  },
  availableCreditRow: {
    marginTop: '2em',
    textAlign: 'left'
  },
})

const chase = require('../../img/chase.png')
const discover = require('../../img/discover-white.png')
const amex = require('../../img/amex-white.png')

var items = [
  {
    name: 'American Express Gold',
    balance: 420.24,
    company: 'Amex',
    bg: '#EAB543',
    lastFour: 1234,
    creditLimit: 10000,
    minDue: 0,
    logo: amex
  },
  {
    name: 'Chase Sapphire',
    balance: 4320.24,
    company: 'Chase',
    bg: 'black',
    lastFour: 4321,
    creditLimit: 7500,
    minDue: 0,
    logo: chase
  },
  {
    name: 'Discover',
    balance: 500.24,
    company: 'Discover',
    bg: 'black',
    lastFour: 4321,
    creditLimit: 15000,
    minDue: 0,
    logo: discover
  },
]

const Item = (props) => {
  const classes = useStyles()
  const { logo, name, lastFour, balance, creditLimit } = props.item

  return (
    <Paper className={classes.creditCard} style={{ backgroundColor: props.item.bg }}>
      <Grid container spacing={2}>
        <Grid className={classes.logoContainer} item xs={3}>
          <img 
            className={classes.logo}
            src={logo} 
            alt="credit card logo" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body">
            {lastFour}
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.balanceRow}>
        <Grid item xs={4} alignItems="left">
          <Typography className={classes.balanceTitle} variant="body">
            Balance
          </Typography>
          <Typography className={classes.balance} variant="subtitle1">
            ${balance}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={4} className={classes.availableCreditRow}>
        <Typography variant="caption">Available Credit</Typography>
        <Typography variant="subtitle1">
          ${creditLimit - balance}
        </Typography>
      </Grid>
    </Paper>
  )
}

const CreditCardDebt = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Credit Cards: <span className={classes.creditCardTotal}>$2326.25</span>
        </Typography>
        <hr />
        <Carousel>
          {items.map(item => <Item key={item} item={item} />)}
        </Carousel>
      </CardContent>
    </Card>
  )
}

export default CreditCardDebt