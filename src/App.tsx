import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="global-align">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
