import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './index';
import Edit from './Edit';
import New from './New'
import Destroy from './Destroy';
import Form from './Form';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/issuers" component={Index}/>
      <Route exact path="/issuers/edit/:id" component={Edit}/>
      <Route exact path="/issuers/new" component={New}/>
      <Route exact path="/issuers/destroy/:id" component={Destroy}/>
      <Route exact path="/form" component={Form}/>
    </Switch>
  );
}
 
export default Routes;