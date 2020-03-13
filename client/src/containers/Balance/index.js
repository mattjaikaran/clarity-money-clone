import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

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
                  <Typography variant="body2" component="p">
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="right">${row.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <Grid className={classes.top} container spacing={3}>
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
        </Grid> */}
      </CardContent>
    </Card>
  )
}

export default Balance