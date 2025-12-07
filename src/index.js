import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homebar from './components/Homebar';
import Homepage from './components/Homepage';
import Greeting from './components/Greeting';
import Publications from './components/Publications';
import Sidenav from './components/Sidenav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/" hashType="noslash">
      <Row>
        <Homebar />
      </Row>
      <Row>
        <Col md={2}>
        </Col>
        <Col>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </Col>
        <Col md={2}>
        </Col>
      </Row>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
