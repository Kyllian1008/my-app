// index.js
import React from 'react';
import ReactDOM from 'react-dom';
//import Routes from './Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ChainInfo from './ChainInfo';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';


const router = createBrowserRouter([
  {
    path: "/ChainInfo",
    element: <ChainInfo/>,
  },
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


