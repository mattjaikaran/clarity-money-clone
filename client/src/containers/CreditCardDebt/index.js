import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
    width: '100%',
    textAlign: 'center'
  },
  creditCardTotal: {
    color: 'black'
  },
})

var items = [
  {
    name: 'American Express Gold',
    balance: 420.24,
    company: 'Amex',
    lastFour: 1234,
    availableCredit: 958.32,
    minDue: 0,
  },
  {
    name: 'Chase Sapphire',
    balance: 4320.24,
    company: 'Chase',
    lastFour: 4321,
    availableCredit: 1973.38,
    minDue: 0,
  },
]

const Item = (props) => (
  <Paper>
    <Typography variant="body2">
      {props.item.name}
    </Typography>
    <Typography variant="body">
      {props.item.balance}
    </Typography>
  </Paper>
)

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