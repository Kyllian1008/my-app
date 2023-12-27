// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ChainInfo from './ChainInfo';
import App from './App';
import ErrorPage from './ErrorPage';
import FakeBayc from './FakeBayc';
import TokenPage from './TokenPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/ChainInfo',
    element: <ChainInfo />,
  },
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/ErrorPage',
    element: <ErrorPage />,
  },
  {
    path: '/FakeBayc',
    element: <FakeBayc />,
  },
  {
    path: '/FakeBayc/:tokenId',
    element: <TokenPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
