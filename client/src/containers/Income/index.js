import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: 14,
  },
  positive: {
    color: '#22d0a5',
    margin: '16px 0'
  },
  incomeImg: {
    maxWidth: '80px'
  },
})

const Income = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="body" component="p">
          Income so far this month
        </Typography>
        <Typography className={classes.positive} variant="h4" component="h2">
          $6961.86
        </Typography>
        <img 
          className={classes.incomeImg}
          src={require('../../img/income.png')} 
          alt="income" />
      </CardContent>
    </Card>
  )
}

export default Income