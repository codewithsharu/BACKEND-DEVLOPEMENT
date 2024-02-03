import React from 'react';
import './App.css';

function App(props) {
  console.log(props);
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h1>{props.sec}</h1>
    </div>
  );
}

export default App;
