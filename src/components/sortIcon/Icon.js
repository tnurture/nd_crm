import React from 'react';
import classes from './Icon.css'
const SortIcon =(props)=>{
   return (
    <div className={props.active?classes.active:''}>
    <span className={classes.arrowUp}></span>
    <span className={classes.arrowDown}></span>
   
    </div>
    );
  }

export default SortIcon;


