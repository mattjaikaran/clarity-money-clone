import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1
  },
  top: {
    marginTop: '0'
  },
  table: {
    width: '100%',
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

function createData(name, amount) {
  return { name, amount }
}

const rows = [
  createData('Cash', 4470.39),
  createData('Credit Debt', 1038.22),
]


const Balance = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Table className={classes.table} size="medium" aria-label="a medium sized table">
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <Typography 
                    variant="body2" 
                    component="p">
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell 
                  className={
                    row.name === 'Cash' && row.amount > 100 ? classes.positive : ''
                  }
                  align="right">
                  ${row.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Balance