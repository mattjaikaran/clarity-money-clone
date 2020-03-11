import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import AllTransactionsButton from './components/AllTransactionsButton'
import TransactionsTimelineButton from './components/TransactionsTimelineButton'
import TransactionsTable from './components/TransactionsTable'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1rem',
    minWidth: 275,
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  right: {
    textAlign: 'right',
  },
}))

const Transactions = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <AllTransactionsButton />
          </Grid>
          <Grid item xs={6}>
            <TransactionsTimelineButton />
          </Grid>
        </Grid>
        <TransactionsTable />
      </CardContent>
    </Card>
  )
}

export default Transactions