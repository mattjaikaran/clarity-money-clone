import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '0 1em',
    flexGrow: 1
  },
  top: {
    marginTop: '0'
  },
  title: {
    fontSize: 14,
  },
  number: {
    textAlign: 'right'
  },
  positive: {
    color: '#22d0a5'
  },
  hr: {
    margin: '20px 0'
  },
})

const Balance = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid className={classes.top} container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="body2" component="p">
              Cash
            </Typography>
          </Grid>
          <Grid className={classes.number} item xs={6}>
            <Typography className={classes.positive} variant="body2" component="p">
              $4,470.39
            </Typography>
          </Grid>
        </Grid>
        <hr className={classes.hr} />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="body2" component="p">
              Credit Debt
            </Typography>
          </Grid>
          <Grid className={classes.number} item xs={6}>
            <Typography  variant="body2" component="p">
              $1,038.22
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Balance