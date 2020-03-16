import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import CancelMonthlyTable from './components/CancelMonthlyTable'

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center'
  },
  header: {
    color: 'black',
    padding: '14px 16px 3px 16px'
  },
  title: {
    marginTop: '10px',
  },
  btnContainer: {
    marginTop: '10px',
  },
  bankIcon: {
    maxWidth: '80px',
    margin: '1em 0'
  },
  btn: {
    backgroundColor: '#22d0a5',
    width: '100%',
    color: 'white',
    padding: '1em 0',
    '&:hover': {
      background: 'black',
    }
  },
  btnContainer: {
    marginTop: '10px',
  },
})

const CancelMonthly = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} subheader="Anything you'd like to cancel?" />
      <hr />
      <CardContent>
        <CancelMonthlyTable />
        <CardActions className={classes.btnContainer}>
          <Button className={classes.btn} size="medium">
            Let's Take a Look
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CancelMonthly