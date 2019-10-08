import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Inventory from './components/inventory/inventory';
import Sales from './components/sales/sales';

export default function Routes() {
  return (
    
      <BrowserRouter>
      <Navigation>
          <Route exact path="/"><Redirect to="/vendas" /></Route>
          <Route path="/vendas/" exact component={Sales}/>
          <Route path="/estoque/" exact component={Inventory}/>
          <Route path="/estoque/new"><Redirect to="/estoque" /></Route>
        </Navigation>
      </BrowserRouter>
  );
}