import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
    width: '100%',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  graph: {
    margin: '1em 0'
  },
  creditScoreRating: {
    color: '#22d0a5'
  },
  pos: {
    margin: '10px 0',
  },
  disclaimer: {
    textDecoration: 'none'
  },
  learnMore: {
    textDecoration: 'none'
  },
})

const CreditScore = (props) => {
  const classes = useStyles()
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography >
          Your score: <span className={classes.creditScoreRating}>Good</span>*
        </Typography>
        <hr />
        {/* <Typography className={classes.graph} color="textSecondary" gutterBottom>
          *Graph*
        </Typography> */}
        <img 
          className={classes.graph} 
          src={require('../../img/credit-score-graph.png')} 
          alt="graph" />
        <Typography variant="body" component="p">
          Your credit score increased by 25 points
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary" variant="caption" component="p">
          Updated on February 29
        </Typography>
        <Typography variant="caption" component="p">
          *VantageScore 3.0® powered by Experian® <a className={classes.learnMore} href="#!">Learn More</a>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CreditScore