import React from 'react';
import Leads from '../../container/Leads/Leads';
import LeadsDetail from '../../container/Leads/leadDetail/LeadsDetail';
import {Route, Switch, Redirect} from 'react-router-dom';
const LayoutRouting= ()=>{
return  (
    <Switch>
          <Route exact path="/home/Leads" component={Leads}/>
          <Route exact path="/home/LeadsDetail" component={LeadsDetail}/>
           <Redirect from='/' to='/home/Leads'/>
       
         </Switch>
)
}
export default LayoutRouting;
