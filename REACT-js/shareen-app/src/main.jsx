import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App  title="shareen ra babu" sec="A" />
    <App title="shareen " sec="B"/>
    <App title="shareen 1234"sec="C" />
  </React.StrictMode>,
  document.getElementById('root')
);
