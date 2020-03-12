import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    marginTop: '1em',
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
})

const ConnectAccounts = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} subheader="Connect More Accounts">
        <Typography variant="body2" component="p">
          Connect More Accounts
        </Typography>
      </CardHeader>
      <hr />
      <CardContent>
        <img 
          className={classes.bankIcon} 
          src={require('../../img/bank.png')} 
          alt="bank icon" />
        <Typography className={classes.title} variant="body" component="p">
          The more accounts you connect the better our insights are.
        </Typography>
        <CardActions className={classes.btnContainer}>
          <Button className={classes.btn} size="medium">Link Other Accounts</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default ConnectAccounts