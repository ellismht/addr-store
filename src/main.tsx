import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


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
