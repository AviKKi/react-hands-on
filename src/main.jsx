import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Todo from "./components/todo.jsx";
import Timer from "./components/timer.jsx";
import WeatherApp from "./components/weather.jsx";

const links = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Link to="/todo">Todo List</Link>
    <Link to="/timer">Timer App</Link>
    <Link to="/weather">Weather App</Link>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: links,
  },
  { path: "/todo", element: <Todo /> },
  { path: "/timer", element: <Timer /> },
  { path: "/weather", element: <WeatherApp /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
