import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import reportWebVitals from './reportWebVitals.jsx';
import { 
  BrowserRouter, 
  // HashRouter, 
  // Route
 } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HashRouter> */}
        {/* Catch all routes and render App component */}
        <BrowserRouter basename = "/">
          {/* <Route path="*" element={<App />} /> */}
          <App />
        </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();