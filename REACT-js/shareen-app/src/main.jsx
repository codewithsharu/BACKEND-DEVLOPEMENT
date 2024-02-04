// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MsgBox from './MsgBox.jsx';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App title="shareen ra babu" sec="A" />
    <App title="shakila ra babu" sec="B" />
    <MsgBox userName="John" textColor="blue" />
    <MsgBox userName="rasmithavandana" textColor="pink" />

  </React.StrictMode>,
  document.getElementById('root')
);
