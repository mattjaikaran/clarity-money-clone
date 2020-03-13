import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  icon: {
    maxWidth: '24px',
    // todo - get rows to be same height
  },
})

function createData(name, amount, icon) {
  return { name, amount, icon }
}

const verizon = require('../../../img/verizon.png')
const spotify = require('../../../img/spotify.png')
const coned = require('../../../img/coned.png')
const nationalGrid = require('../../../img/national-grid.png')

const rows = [
  createData('Verizon Wireless', 90.00, verizon),
  createData('ConEdison', 87.34, coned),
  createData('NationalGrid', 20.20, nationalGrid),
  createData('Spotify', 10.91, spotify),
]

export default function CancelMonthlyTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="medium" aria-label="a medium sized table">
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
