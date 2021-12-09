import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { observe } from './app-state';

const root = document.getElementById('root');

observe((appState) =>
  ReactDOM.render(
    <React.StrictMode>
      <App appState={appState} />
    </React.StrictMode>,
    root
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
