import React from 'react';
import './App.css';
import Routes from './routes'
import Nav from './components/Nav/nav'

function App() {
  return (
    <div className="App">

      <div>
        <Nav />
        {Routes}
      </div>
    </div>
  );
}

export default App;
