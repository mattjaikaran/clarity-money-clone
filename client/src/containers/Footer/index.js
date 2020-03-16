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
    width: '103%', 
    position: 'fixed',
    bottom: 0,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
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
      <BottomNavigationAction label="Dashboard" icon={<DashboardIcon />} />
      <BottomNavigationAction label="Accounts" icon={<AccountBalanceIcon />} />
      <BottomNavigationAction label="Transactions" icon={<SearchIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  )
}