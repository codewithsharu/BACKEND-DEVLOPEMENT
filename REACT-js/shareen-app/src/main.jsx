import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

let o = ['x', 'y', 'z'];
let dic = {
  x: 'value_x',
  y: 'value_y',
  z: 'value_z'
};
ReactDOM.render(
  <React.StrictMode>
    <App title="shareen ra babu" sec="A" option={o} />
    <App title="shareen" sec="B"option={dic.x}  />
    <App title="shareen 1234" sec="C" option={dic.y} />
    <App title="shareen ra babu" sec="A" option={o} />
    <App title="shareen" sec="B"option={dic.x}  />
    <App title="shareen 1234" sec="C" option={dic.y} />
    <App title="shareen ra babu" sec="A" option={o} />
    <App title="shareen" sec="B"option={dic.x}  />
    <App title="shareen 1234" sec="C" option={dic.y} />
  </React.StrictMode>,
  document.getElementById('root')
);
