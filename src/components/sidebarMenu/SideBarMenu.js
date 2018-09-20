import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import customStyle from './SideBarMenu.css';
const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 2,
  },

  gutters: {
    padding: 15,
    justifyContent:"spacing-between",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25
  },
  selectedItem:{
    backgroundColor:'#05aae5!important'
  },
  button: {
    textTransform: 'uppercase',
    fontSize: 10,
  },
  container:{
    backgroundColor:'rgba(1, 1, 1, 0.22)'

  },
  listColor:{
    color:'#fff'
  },
  ItemText:{
    display:'block'
  },
  childTextItem:{
color:"#fff",
fontSize:14
  },
  svgColor:{
    color:"#fff"
  }
});

function SidebarMenu(props) {
  
  const { classes } = props;
  return (
    <div>
   
      <List component="nav">
      <NavLink to="/home/dashboard" title="Home">
        <ListItem className={customStyle.Home} classes={{
          selected:classes.selectedItem,
          gutters: classes.gutters // class name, e.g. `classes-nesting-label-x`
        }} selected={props.selectedindex === 1} selectedindex="1" button>
        <ListItemIcon color="action">
       <i></i>
      </ListItemIcon>
          <ListItemText classes={{
            root: classes.listColor,
            primary:classes.childTextItem
          }}  inset primary="DashBoard"  />  
         
      </ListItem></NavLink>
      
      <NavLink to="/home/dashboard" title="Companies">
      <ListItem className={customStyle.Companies} classes={{
        selected:classes.selectedItem,
        gutters: classes.gutters // class name, e.g. `classes-nesting-label-x`
      }} selected={props.selectedindex === 2} selectedindex="2" button>
      <ListItemIcon color="action">
     <i></i>
    </ListItemIcon>
        <ListItemText  classes={{
          root: classes.listColor,
          primary:classes.childTextItem
        }}  inset primary="Companies"  />  
       
    </ListItem></NavLink>
    <NavLink to="/home/dashboard" title="Leads">
    <ListItem className={customStyle.Leads} classes={{
      selected:classes.selectedItem,
      gutters: classes.gutters // class name, e.g. `classes-nesting-label-x`
    }} selected={props.selectedindex === 3} selectedindex="3" button>
    <ListItemIcon color="action">
   <i></i>
  </ListItemIcon>
      <ListItemText classes={{
        root: classes.listColor,
        primary:classes.childTextItem
      }}  inset primary="Leads"  />  
     
  </ListItem></NavLink>
  <NavLink to="/home/dashboard" title="Jobs">
  <ListItem className={customStyle.Jobs} classes={{
    gutters: classes.gutters // class name, e.g. `classes-nesting-label-x`
  }} selected={props.selectedindex === 4} selectedindex="4" button>
  <ListItemIcon color="action">
  <i></i>
</ListItemIcon>
    <ListItemText classes={{
      root: classes.listColor,
      primary:classes.childTextItem
    }}  inset primary="Jobs"  />  
   
</ListItem></NavLink>
<NavLink to="/home/dashboard" title="Actions">
<ListItem className={customStyle.Actions} classes={{
  gutters: classes.gutters // class name, e.g. `classes-nesting-label-x`
}} selected={props.selectedindex === 5} selectedindex="5" button>
<ListItemIcon color="action">
<i></i>
</ListItemIcon>
  <ListItemText classes={{
    root: classes.listColor,
    primary:classes.childTextItem
  }}  inset primary="Actions"  />  
 
</ListItem></NavLink>
<NavLink to="/home/dashboard" title="Reports">
<ListItem className={customStyle.Reports} classes={{
  gutters: classes.gutters // class name, e.g. `classes-nesting-label-x`
}}  button>
<ListItemIcon color="action">
<i></i>
</ListItemIcon>
  <ListItemText classes={{
    root: classes.listColor,
    primary:classes.childTextItem
  }}  inset primary="Reports"  />  
 
</ListItem></NavLink>
<NavLink to="/home/dashboard" title="More">
<ListItem className={customStyle.More} classes={{
  gutters: classes.gutters // class name, e.g. `classes-nesting-label-x`
}} selected={props.selectedindex === 7} selectedindex="7" button>
<ListItemIcon color="action">
<i></i>
</ListItemIcon>
  <ListItemText classes={{
    root: classes.listColor,
    primary:classes.childTextItem
  }}  inset primary="More"  />  
 
</ListItem></NavLink>
      </List>
    </div>
  );
}

SidebarMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarMenu);



