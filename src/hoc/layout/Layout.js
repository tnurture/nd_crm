import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Sidebar from '../../container/sidebar/SideBar';
import Logo from '../../components/header/logo/Logo';
import LayoutRouting from './LayoutRouting';
import styleCss from './Layout.css'
import { Link } from 'react-router-dom';
import LogoIcon from '../../components/header/logo/LogoIcon'
const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
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
    marginRight: 36,
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
    width: 56,
    [theme.breakpoints.up('sm')]: {
      width: 56,
    },
  },
  toolbar: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
    ...theme.mixins.toolbar,
  },
 content: {
    flexGrow: 1,
    padding: "10px 15px",
    height: '100vh',
    overflow: 'auto'
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
});

class Layout extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDraweToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes} = this.props;

    return (
      <div className={classes.root} >
             <Drawer 
          variant="permanent" 
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
       <div className={styleCss.menuBurger}>
      <div onClick={this.handleDraweToggle} className={styleCss.menuBurgerItem}> <span></span>
      <span></span>
      <span></span></div>
       </div>
          <div className={classes.toolbar} style={{justifyContent:"center"}}>
          <Link to="/home">
          {this.state.open?<Logo/>:<LogoIcon/>}
          </Link>
          </div>
         
          <Sidebar Draweropen={this.state.open} />
        </Drawer>
        <main className={classes.content}>
        
         {/* partial view starts here */}
         <LayoutRouting/>
      
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);