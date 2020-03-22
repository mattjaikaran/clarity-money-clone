import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import './App.css'


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

import ProfileImg from './components/ProfileImg'


const drawerWidth = '16.6%';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  logo: {
    maxWidth: '60px',
    marginLeft: '15px',
    marginTop: '1em',
  },
  navItem: {
    fontSize: '22px',
    padding: '10px'
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
  header: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#30455b',
    color: '#fff',
  },
  active: {
    backgroundColor: '#22d0a5', 
    '&:hover': {
      backgroundColor: '#22d0a5', 
    }
  },
  avatar: {
    width: '100%',
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: 0,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    
  },
  divider: {
    borderBottom: '1px solid rgba(255,255,255, 0.2)'
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      // marginTop: '1em',
    },
  },
  buffer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  bufferLg: {
    [theme.breakpoints.only('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
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
      <img 
        className={classes.logo}
        src={require('./img/logo.png')}
        alt="logo" />
      <div className={classes.avatar}>
        <ProfileImg 
          initials="MJ" 
          name="Matthew Jaikaran" />
      </div>
      <List>
        <ListItem className={classes.active} button>
          <ListItemText className={classes.navItem} primary="Dashboard" />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button>
          <ListItemText className={classes.navItem} primary="Accounts" />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button>
          <ListItemText className={classes.navItem} primary="Transactions" />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button>
          <ListItemText className={classes.navItem} primary="Profile" />
        </ListItem>
        <Divider className={classes.divider} />
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
          <Grid className={classes.root}>
            <Grid className={classes.header} item xs={12}>
              <Header />
            </Grid>
            <Grid container spacing={3}>
              <Grid className={classes.buffer} item md={2} />
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={3}>
                <Balance />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={3}>
                <Spending />
              </Grid>
              <Grid className={classes.bufferLg} item md={2} />
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={4}>
                <Transactions />
              </Grid>
              <Grid className={classes.buffer} item lg={2} />
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={3}>
                <Loan />
              </Grid>
              <Grid className={classes.bufferLg} item md={2} />
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={4}>
                <ConnectAccounts />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={3}>
                <Income />
              </Grid>
              <Grid className={classes.buffer} item md={2} />
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={3}>
                <MonthBreakdown />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={4}>
                <CancelMonthly />
              </Grid>
              <Grid className={classes.bufferLg} item md={2} />
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={3}>
                <CreditScore />
              </Grid>
              <Grid className={classes.buffer} item md={2} />
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={4}>
                <CreditCardDebt />
              </Grid>
              <Grid className={classes.bufferLg} item md={2} />
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={3}>
                <HowItWorks />
              </Grid>
              <Grid item className={classes.item} xs={12} sm={6} md={5} lg={3}>
                <ShareWithFriends />
              </Grid>
              <Grid className={classes.buffer} item md={2} />
              <Grid item className={classes.item} xs={12} sm={12} md={5} lg={3}>
                <ThankYou />
              </Grid>
            </Grid>
          </Grid>
        </main>
        <Footer />
      </Grid>
    </div>
  )
}
App.propTypes = {
  container: PropTypes.any,
}

export default App
