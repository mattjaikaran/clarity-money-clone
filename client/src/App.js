import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import './App.css'

import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'
import SearchIcon from '@material-ui/icons/Search'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

import Footer from './containers/Footer'
import Balance from './containers/Balance'
import Header from './containers/Header'
import Spending from './containers/Spending'
import Transactions from './containers/Transactions'
import Loan from './containers/Loan'
import ConnectAccounts from './containers/ConnectAccounts'
import Income from './containers/Income'
import MonthBreakdown from './containers/MonthBreakdown'
import CancelMonthly from './containers/CancelMonthly'
import CreditScore from './containers/CreditScore'
import CreditCardDebt from './containers/CreditCardDebt'
import HowItWorks from './containers/HowItWorks'
import ShareWithFriends from './containers/ShareWithFriends'
import ThankYou from './containers/ThankYou'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '1em',
    },
  },
}))

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Grid className={classes.root} container spacing={2}>
            <Grid container spacing={2}>
              <Grid item className={classes.item} xs={12}>
                <Header />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <Balance />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <Spending />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <Transactions />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <Loan />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <ConnectAccounts />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <Income />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <MonthBreakdown />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <CancelMonthly />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <CreditScore />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <CreditCardDebt />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <HowItWorks />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <ShareWithFriends />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={4}>
                <ThankYou />
              </Grid>
              <Footer />
            </Grid>
          </Grid>
        </main>
      </Grid>
    </div>
  )
}
App.propTypes = {
  container: PropTypes.any,
}

export default App
