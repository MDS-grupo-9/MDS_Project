import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import BancoDados from "./pages/bancoDados/BancoDados";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "bancoDados",
    element: <BancoDados />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


