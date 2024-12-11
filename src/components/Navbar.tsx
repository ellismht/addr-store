import { Link } from "react-router";

const prefix = "/addr-store";

const Navbar = () => {
  return (
    <>
    <div className="global-align text-3xl font-thin bg-victoria-300 py-4 text-victoria-800">
      <Link to={prefix}>
        Addr<span className="text-victoria-800 font-bold">-Store</span>
      </Link>
      </div>
      <nav className="global-align flex flex-row gap-x-8 py-4 bg-victoria-300 text-victoria-950">
        <Link to={prefix} className="text-xl tracking-wider">
          Główna
        </Link>
        <Link to={`${prefix}/products`} className="text-xl tracking-wider">
          Produkty
        </Link>
        <Link to={`${prefix}/about`} className="text-xl tracking-wider">
          O nas
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
