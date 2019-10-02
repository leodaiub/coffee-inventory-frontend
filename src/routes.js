import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Inventory from './components/inventory/inventory';
import Sales from './components/sales/sales';

export default function Routes() {
  return (
    <Navigation>
      <BrowserRouter>
          <Route path="/" exact component={Sales}/>
          <Route path="/vendas/" exact component={Sales}/>
          <Route path="/estoque/" exact component={Inventory}/>
      </BrowserRouter>
    </Navigation>
  );
}