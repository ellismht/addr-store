import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Products from "./pages/Products.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/addr-store",
    element: <App/>,
    children:[
      {
        index:true,
        path: "",
        element: <Home/>
      },
      {
        path: "products",
        element: <Products/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
