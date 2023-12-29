import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import TodoList from './TodoList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <TodoList />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
