import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bus from './Main/Bus';


import Flight from './Main/Flight';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Train from './Main/Train';
import Hotel from './Main/Hotel';
const routers = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/flight",
    element: <Flight />,
  },
  {
    path: "/train",
    element: <Train/>,
  },
  
  {
    path: "/hotel",
    element: <Hotel/>,
  },
  
  {
    path: "/bus",
    element: <Bus/>,
  },
  
 

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routers} / >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
