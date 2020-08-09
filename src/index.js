import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Clientes from './views/Clientes';
import Pagina404 from './views/Pagina404';
import ClienteMostrar from './views/ClienteMostrar';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/cliente/novo" component={ClienteMostrar} />
        <Route path="/cliente/:id" component={ClienteMostrar} />
        <Route path='*' component={Pagina404} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
