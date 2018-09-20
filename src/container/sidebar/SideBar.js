import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import { StatusColor } from '../../ThemeColor';
import SidebarMenu from '../../components/sidebarMenu/SideBarMenu';
import Search from '../../components/search/Search';
import SearchIcon from '@material-ui/icons/Search';
// import bg from  '../../assets/images/bg.jpg';
import NotificationIcon from '@material-ui/icons/NotificationsActive';
import EmailIcon from '@material-ui/icons/Email';
import AccountIcon from '@material-ui/icons/AccountCircle';
import styleCss from './SideBar.css';
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    minHeight: "90vh",
    backgroundColor: theme.palette.primary.main,
   //background: `url(${bg}) right top no-repeat` ,
   backgroundSize: "cover"
  }
});

class SideBar extends React.Component {
  state = {
    open: true,
    selectedindex:3,
  };
  renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: StatusColor,
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props} />
    );
  }
  handleClick = (selectedindex) => {
    this.setState(state => ({ open: true, selectedindex:selectedindex }));
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
     
        <div className={[classes.root, 'sideBarWrapper'].join(' ')}>
       
        
       

        {this.props.Draweropen?  <div className={styleCss.SearchContainer}><Search color="#ccc" textColor="#fff" /> </div>:<div className={styleCss.SearchMiniContainer}><SearchIcon/></div>}
       
      
        
        <div className={styleCss.MenuListSec}>
        <Scrollbars
        renderThumbVertical={this.renderThumb}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={'55vh'}
        thumbMinSize={30}
        universal={true} >
         <SidebarMenu menuClick={this.handleClick} open={this.state.open} selectedindex={this.state.selectedindex} />
         </Scrollbars>
         </div>
         <div  className={this.props.Draweropen? "NotoficationContainer":"MiniNotoficationContainer"}>
         <a className={styleCss.whiteColor}><NotificationIcon  /></a>
         <a className={styleCss.whiteColor}><EmailIcon/></a>
         <a className={styleCss.whiteColor}><AccountIcon/></a>
         </div>
         </div>
    
      
         
      </React.Fragment>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideBar);

