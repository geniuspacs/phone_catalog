import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { AppHeader } from './components/appHeader';

ReactDOM.render(
  <Container fluid className="p-0">
    <AppHeader />
    <Dashboard />
  </Container>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
