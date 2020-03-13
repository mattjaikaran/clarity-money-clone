import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '1em',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#22d0a5'
  },
  icon: {
    margin: '1em 0',
  },
  btnContainer: {
    marginTop: '10px',
    marginBottom: '1em'
  },
  btn: {
    backgroundColor: 'black',
    width: '100%',
    color: 'white',
    padding: '1em 0',
    '&:hover': {
      background: 'black',
    }
  },
})

const ShareWithFriends = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.icon}>
          <img src={require('../../img/piggy-bank-white.png')} />
        </div>
        <Typography variant="subtitle1" component="p">
          Love Clarity Money?
          <br />
          Share it with your friends!
        </Typography>
      </CardContent>
      <CardActions className={classes.btnContainer}>
        <Button className={classes.btn} size="medium">Invite Friends</Button>
      </CardActions>
    </Card>
  )
}

export default ShareWithFriends