import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Products from "./pages/ProductsPage";
import About from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/addr-store/" element={<MainPage />} />
        <Route path="/addr-store/products" element={<Products />} />
        <Route path="/addr-store/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
