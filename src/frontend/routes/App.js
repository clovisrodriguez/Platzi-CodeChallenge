import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import '../assets/styles/Reset.styl';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
