import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container mx-auto bg-purple-100">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
