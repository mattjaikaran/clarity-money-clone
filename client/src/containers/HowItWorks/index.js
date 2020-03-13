import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    color: 'white',
    textAlign: 'center',
  },
  card: {
    marginTop: '1em',
    width: '100%',
  },
  title: {
    marginTop: '1em'
  },
  icon: {
    maxWidth: '50px',
    margin: '2em 0',
  },
  paragraph: {
    padding: '0 17%'
  }
})

const phone = require('../../img/phone.png')
const piggybank = require('../../img/piggy-bank-white.png')
const piechart = require('../../img/pie-chart-white.png')

var items = [
  {
    name: 'How It Works',
    img: phone,
    bg: '#192a56',
    copy: `We are always working on new ways to help you, so over time you'll see new tiles appear in your feed.`,
  },
  {
    name: 'How It Works',
    img: piggybank,
    bg: '#22d0a5',
    copy: `We deliver insights that can help you take control of your finances.`,
  },
  {
    name: 'How It Works',
    img: piechart,
    bg: '#00d2d3',
    copy: `We do this by analyzing your spending patterns.`,
  },
]

const Item = (props) => {
  const classes = useStyles()
  return (
    <Paper 
      className={classes.root} 
      style={{ backgroundColor: `${props.item.bg}` }}>
      <Typography className={classes.title}>
        {props.item.name}
      </Typography>
      <div>
        <img
          className={classes.icon}
          src={props.item.img}
          alt="icon" />
      </div>
      <Typography className={classes.paragraph} display="block" variant="caption">
        {props.item.copy}
      </Typography>
    </Paper>
  )
}

const HowItWorks = (props) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Carousel>
          {items.map(item => <Item key={item} item={item} />)}
        </Carousel>
      </CardContent>
    </Card>
  )
}

export default HowItWorks