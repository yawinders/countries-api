import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header.jsx';
import App from './App.jsx'
import ContactUs from './Components/ContactUs.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CountryDetail from './Components/CountryDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/",
    //     element: <div>ContactUs</div>,
    //   },
    // ]
  },
  {
    path: '/:country',   //created dynamic routing by using colon:
    element: <CountryDetail />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
