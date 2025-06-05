import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="global-align text-3xl font-thin pt-4">
        <NavLink to="/" className="navLogo" end>
          Addr<span className="font-bold">-Store</span>
        </NavLink>
      </div>
      <nav className="global-align flex justify-center gap-x-8 py-4">
        <NavLink to="products" className="hover:text-cyan-400 text-xl tracking-wider">
          Produkty
        </NavLink>
        <NavLink to="about" className="text-xl tracking-wider">
          O nas
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
