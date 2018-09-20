import React from 'react';
import Layout from './hoc/layout/Layout';
import {Route, Switch} from 'react-router-dom';
const Routing= ()=>{
return  (
    <Switch>
    <Route exact path='/' component={Layout}/>
    <Route path="/home" component={Layout}/>
    </Switch>
)
  

}


export default Routing;
