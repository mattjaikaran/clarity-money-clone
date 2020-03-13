import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#192a56',
    marginTop: '1em',
    color: 'white',
    textAlign: 'center'
  },
  incomeAmt: {
    color: '#22d0a5',
  },
  incomeTitle: {
    margin: '20px 0 5px 0',
    color: '#22d0a5',
  },
  pieChart: {
    marginTop: '2em'
  },
  math: {
    margin: '1em 0'
  },
  spent: {
    color: 'white'
  },
  left: {
    color: '#22d0a5'
  },
})

const MonthlyBreakdown = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="subtitle1" component="p">
          April
        </Typography>
        <Typography className={classes.incomeTitle} variant="body" component="p">
          Income
        </Typography>
        <Typography className={classes.incomeAmt} variant="h5" component="h2">
          $10,000
        </Typography>
        <img 
        className={classes.pieChart}
        src={require('../../img/pie-chart.png')}
        alt="pie chart" />
        <Grid className={classes.math} container spacing={3}>
          <Grid item xs={6}>
            <Typography 
              className={classes.spent} 
              variant="subtitle1" 
              component="p">
              Spent
            </Typography>
            <Typography className={classes.spent} variant="h5" component="h2">
              $6,000
        </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography 
            className={classes.left} 
            variant="subtitle1" 
            component="p">
              April
            </Typography>
            <Typography className={classes.left} variant="h5" component="h2">
              $4,000
        </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MonthlyBreakdown