import React from 'react';
import logo from './logo.svg';
import './App.css';

function Test(x: {depth: string}) {
  const y:number = +x.depth;
  const gray = y ^ (y >> 1);
  let cor = "#";
  for (let i = 0; i < 3; i++) {
    if (gray&(1<<i)) {
      cor = cor + 'FF';
    } else {
      cor = cor + '00';
    }
  }
  return (
    <div style={{color: cor, fontSize: "1.1em", lineHeight: "0.1em"}}>
      Hello World!
      { (y > 0) && 
         (<Test depth={''+(y-1)}/>)
       }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
          <Test depth="7" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
