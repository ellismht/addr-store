import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Products from "./pages/Products.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import { PrimeReactProvider } from 'primereact/api';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ],
  { basename: "/addr-store" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>
);
