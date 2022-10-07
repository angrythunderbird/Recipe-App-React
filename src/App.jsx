import { useRef } from 'react';
import Pages from './pages/Pages';

import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <div className='container' id='container'>
        <header>Hello</header>
        <Pages />
      </div>
    </div>
  );
}

export default App;
