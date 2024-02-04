import React from 'react';
import './App.css';

function App(props) {
  let s = { backgroundColor: "blue" }; 
  console.log(props);
  return (
    <div className="card" style={s}>
      <h1>{props.title}</h1>
      <h1>{props.sec}</h1>
      <h1>{props.option}</h1>
    </div>
  );
}

export default App;
