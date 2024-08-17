import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Layouts/Home/Home";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Login from "./components/LogIn/LogIn";
import Inventory from "./components/Inventory/Inventory"
import cartProductsLoader from "./loaders/CartProductsLoader";
import Checkout from "./components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: <Inventory/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path:"/checkout",
        element:<Checkout></Checkout>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
