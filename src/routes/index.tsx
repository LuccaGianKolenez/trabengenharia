import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/home/';
import Table from '../components/Table/Table';
import Funcionarios from '../components/Table/Funcionarios';
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}  />
    <Route path="/cadastro" component={Home} />
    <Route path="/agenda" component={Table}  />
    <Route path="/clientes" exact component={Home}  />
    <Route path="/funcionarios" exact component={Funcionarios}  />
  </Switch>
);

export default Routes;