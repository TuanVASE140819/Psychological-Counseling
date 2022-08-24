import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Login from "../pages/Login";
import PersonForm from "../pages/PersonForm";
import Chat from "../components/Chat";
import Profile from "../pages/Profile";
import FormChat from "../components/FormChat";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/PersonForm" component={PersonForm} />
      <Route path="/chat" component={Chat} />
      <Route path="/profile" component={Profile} />
      <Route path='/formchat' component={FormChat} />
    </Switch>
  );
};

export default Routes;
