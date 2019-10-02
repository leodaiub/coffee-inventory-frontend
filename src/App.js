import React from 'react';
import './App.css';
import Routes from './routes.js';

function App() {
  return (
    <div className="App">
       {/* <ErrorBoundary> */}
      <Routes />
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
