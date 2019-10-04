import React from 'react';
import './App.css';
import Routes from './routes.js';
import ErrorBoundary from './components/errorBoundary';

function App() {
  return (
    <div className="App">
     <ErrorBoundary> 
      <Routes />
     </ErrorBoundary>
    </div>
  );
}

export default App;
