import React from 'react'
import Grid from '@material-ui/core/Grid'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import Balance from './containers/Balance'
import Header from './containers/Header'
import Spending from './containers/Spending'
import Transactions from './containers/Transactions'
import Loan from './containers/Loan'
import ConnectAccounts from './containers/ConnectAccounts'
import Income from './containers/Income'
import MonthBreakdown from './containers/MonthBreakdown'
// import WhereISpend from './containers/WhereISpend'
// import MonthGraph from './containers/MonthGraph'
import CancelMonthly from './containers/CancelMonthly'
import CreditScore from './containers/CreditScore'
import CreditCardDebt from './containers/CreditCardDebt'
import HowItWorks from './containers/HowItWorks'
import ShareWithFriends from './containers/ShareWithFriends'
import ThankYou from './containers/ThankYou'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className="app">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Balance />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Spending />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Transactions />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Loan />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ConnectAccounts />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Income />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MonthBreakdown />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CancelMonthly />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CreditScore />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CreditCardDebt />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <HowItWorks />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ShareWithFriends />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ThankYou />
        </Grid>
        {/* <WhereISpend />
        <MonthGraph /> */}
      </Grid>
    </div>
  )
}

export default App
