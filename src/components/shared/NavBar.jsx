import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-[#56A3A6] rounded-lg text-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#56A3A6] rounded-box w-52 font-bold font-montserrat"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>All Toys</a>
            </li>
            {user && (
              <>
                <li>
                  <a>My Toys</a>
                </li>
                <li>
                  <a>Add a Toy</a>
                </li>
              </>
            )}
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost font-satisfy normal-case text-3xl">
          KhelnaGhor
        </a>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alltoys">All Toys</Link>
          </li>
          {user && (
            <>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a>Add a Toy</a>
              </li>
            </>
          )}
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end font-montserrat">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#56A3A6] rounded-box w-52"
            >
              <li>
                <p>{user?.email}</p>
              </li>

              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
