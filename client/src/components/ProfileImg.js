import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    width: '100%',
    margin: '0 auto',
  },
  avatar: {
    backgroundColor: '#dee8f3',
    color: 'rgba(79,109,141,.8)',
    fontSize: '40px',
    borderRadius: '50%',
    margin: '0 auto',
    width: '100px',
    height: '90px',
  },
  initials: {
    paddingTop: '15px',
    fontWeight: 300,
  },
  name: {
    fontSize: '12px',
    textAlign: 'center',
    color: '#fff',
    opacity: '.75'
  },
})

const ProfileImg = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <h3 className={classes.initials}>{props.initials}</h3>
      </div>
      <div>
        <p className={classes.name}>{props.name}</p>
      </div>
    </div>
  )
}

export default ProfileImg