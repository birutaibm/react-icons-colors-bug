import React from 'react';
import { FaLock } from "react-icons/fa";

import './App.css';

function App() {
  return (
    <div className="App">
      <svg width={100} height={100}>
        <polygon points="0,0 100,0 0,100" />
      </svg>
      <div className="internal">
        <FaLock size={20}/>
        <br />
        Some text with the same color of the lock!
      </div>
    </div>
  );
}

export default App;
