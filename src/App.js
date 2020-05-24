import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';

import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className='App'>
      <Route
        exact
        path='/'
        render={prop => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )}
      ></Route>

      <Route path='/Contact' component={Contact} />

      <Route path='/portfolio' component={Portfolio} />
    </div>
  );
}

export default App;
