import React from 'react';
import ReactDOM from 'react-dom/client';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
    
 
);


