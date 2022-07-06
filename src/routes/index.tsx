import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/home/';
import Table from '../components/Table/Table';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}  />
    <Route path="/cadastro" component={Home} />
    <Route path="/agenda" component={Table}  />
    <Route path="/Clientes" exact component={Home}  />
  </Switch>
);

export default Routes;