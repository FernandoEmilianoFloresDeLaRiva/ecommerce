import React from "react";
import { Route } from "wouter";
import { Provider } from "react-redux";
import { store } from "../Redux/store/productosStore";
import Home from "../page/HomeCliente/Home";
import HomeAdmin from "../page/HomeAdmin/HomeAdmin";

function IndexRouter() {
  return (
    <Provider store={store}>
      <Route path="/" component={Home} />
      <Route path="/admin" component={HomeAdmin} />
    </Provider>
  );
}

export default IndexRouter;
