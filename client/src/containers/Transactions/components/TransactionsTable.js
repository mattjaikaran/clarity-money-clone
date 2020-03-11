import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  icon: {
    maxWidth: '28px',
  },
})

function createData(name, amount, icon) {
  return { name, amount, icon }
}

const spotify = require('../../../img/spotify.png')
const coin = require('../../../img/coin.png')
const paypal = require('../../../img/paypal.png')

const rows = [
  createData('Ticketmaster (pending)', 580.00, coin),
  createData('C-Town Grocery', 87.34, coin),
  createData('Direct Deposit', 2262.42, coin),
  createData('Spotify', 10.91, spotify),
  createData('PayPal Deposit', 455.80, paypal),
]

export default function TransactionsTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="a medium sized table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="left">
                <img className={classes.icon} src={row.icon} alt="icon" />
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography variant="body2" component="p">
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align="right">${row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
