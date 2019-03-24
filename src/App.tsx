import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import { LoginComponentForm } from './page/login/login.component';
import { RegistryComponentForm } from './page/register/registry.component';
import { AdminContainerComponent } from './page/admin/admin-container/admin-container.component';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-root">
          <Switch>
            <Route path={'/login'} component={LoginComponentForm}></Route>
            <Route path={'/registry'} component={RegistryComponentForm}></Route>
            <Route path={'/admin'} component={ AdminContainerComponent }></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
