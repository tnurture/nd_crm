import React from 'react';
import MenuIcon from '@material-ui/icons/KeyboardArrowLeft';
import classes from './Back.css';
import { withRouter } from 'react-router'
function backBtnHandler(props){
    props.history.goBack();
}
const BackBtn=(props)=>{

return (
  <React.Fragment>
  <MenuIcon onClick={backBtnHandler.bind(this, props)} className={classes.BackBtn} />
  
  </React.Fragment>
)

}

export default  withRouter(BackBtn);