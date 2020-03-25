import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import SearchIcon from '@material-ui/icons/Search'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%', 
    position: 'fixed',
    bottom: 0,
    // paddingBottom: '5px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.only('xs')]: {
      height: '80px',
    },
  },
  navItem: {
    // marginBottom: '10px'
  },
}))

export default function Footer() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        className={classes.navItem}
        label="Dashboard" 
        icon={<DashboardIcon />} />
      <BottomNavigationAction 
        className={classes.navItem}
        label="Accounts" 
        icon={<AccountBalanceIcon />} />
      <BottomNavigationAction 
        className={classes.navItem}
        label="Transactions" 
        icon={<SearchIcon />} />
      <BottomNavigationAction 
        className={classes.navItem}
        label="Profile" 
        icon={<PersonIcon />} />
    </BottomNavigation>
  )
}