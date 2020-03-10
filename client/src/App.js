import React from 'react'
import './App.css'

import Balance from './containers/Balance'
import Header from './containers/Header'
import Spending from './containers/Spending'
import Transactions from './containers/Transactions'
import Loan from './containers/Loan'
import ConnectAccounts from './containers/ConnectAccounts'
import Income from './containers/Income'
import MonthBreakdown from './containers/MonthBreakdown'
import WhereISpend from './containers/WhereISpend'
import MonthGraph from './containers/MonthGraph'
import CancelMonthly from './containers/CancelMonthly'
import CreditScore from './containers/CreditScore'
import CreditCardDebt from './containers/CreditCardDebt'
import HowItWorks from './containers/HowItWorks'
import ShareWithFriends from './containers/ShareWithFriends'
import ThankYou from './containers/ThankYou'

function App() {
  return (
    <div className="app">
      <Header />
      <Balance />
      <Spending />
      <Transactions />
      <Loan />
      <ConnectAccounts />
      <Income />
      <MonthBreakdown />
      <WhereISpend />
      <MonthGraph />
      <CancelMonthly />
      <CreditScore />
      <CreditCardDebt />
      <HowItWorks />
      <ShareWithFriends />
      <ThankYou />
    </div>
  )
}

export default App
