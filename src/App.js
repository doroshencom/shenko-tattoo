
import React from 'react';
import Gallery from './Gallery';
import './styles.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main>
        <Gallery />
      </main>
    </div>
  );
}

export default App;
