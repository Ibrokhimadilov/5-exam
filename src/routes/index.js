import React from 'react';
import Category from './category/Category';
import Home from './home/Home';
import { Route, Switch } from 'react-router-dom';
import Product from './product/Product';
import SearchResult from './searchResult/SearchResult';
import Like from './like/Like';
import Login from './auth/login/Login';
import Create from './auth/create/Create';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/category/:id">
          <Category/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/search/:category/:productName">
          <SearchResult/>
        </Route>
        <Route path="/like">
          <Like/>
        </Route>
        <Route path='/auth/login'>
          <Login/>
        </Route>
        <Route path='/auth/create'>
          <Create/>
        </Route>
    </Switch>
  )
}

export default Routes