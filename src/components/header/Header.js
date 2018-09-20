import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
const drawerWidth = 200;
const styles = theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.primary,
      padding: theme.spacing.unit * 3,
    },
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
  });
 


  // function handleClose(){
  //   this.setState({ anchorEl: null });
  // };

 function Header(props) {
    
const { classes} =props;
    return (
        <AppBar
          position="fixed" color="secondary"
          className={classNames(classes.appBar, props.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!props.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={props.handleDrawerOpen}
              className={classNames(classes.menuButton, props.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
           National Decorators 
          </Typography>
         
            <div>
              <IconButton
                aria-owns={true ? 'menu-appbar' : null}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle style={{fontSize:40}} />
              </IconButton>
             
            </div>
          
          </Toolbar>
        </AppBar>
    );
  }
export default withStyles(styles, { withTheme: true })(Header);


