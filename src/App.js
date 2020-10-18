import React from 'react';

import { Route } from 'react-router-dom';

import HomePage from '../src/page/home.component';

function App() {
  return (
    <div>
      <Route path='/' component={HomePage}/>
    </div>
  );
}

export default App;
