import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Tooltip } from "react-tooltip";
import { FaRobot } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-[#373A36] rounded-lg text-white">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#373A36] rounded-box w-52 font-bold font-montserrat"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " text-[#F5BB00] active:bg-[#F5BB00]"
                    : "active:bg-[#F5BB00]  "
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " text-[#F5BB00] active:bg-[#F5BB00]"
                    : "active:bg-[#F5BB00]  "
                }
                to="/alltoys"
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? " text-[#F5BB00] active:bg-[#F5BB00]"
                        : "active:bg-[#F5BB00]  "
                    }
                    to="mytoys"
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? " text-[#F5BB00] active:bg-[#F5BB00]"
                        : "active:bg-[#F5BB00]  "
                    }
                    to="/addtoy"
                  >
                    Add a Toy
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " text-[#F5BB00] active:bg-[#F5BB00]"
                    : "active:bg-[#F5BB00]  "
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-end">
          <FaRobot className="w-14 h-14 text-[#F5BB00]" />
          <a className="btn btn-ghost font-montserrat normal-case text-xl lg:text-3xl">
            KhelnaGhor
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? " text-[#F5BB00]" : "active:bg-[#F5BB00]  "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " text-[#F5BB00]" : "active:bg-[#F5BB00] "
              }
              to="/alltoys"
            >
              All Toys
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-[#F5BB00]" : "active:bg-[#F5BB00] "
                  }
                  to="/mytoys"
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-[#F5BB00]" : "active:bg-[#F5BB00]"
                  }
                  to="/addtoy"
                >
                  Add Toy
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " text-[#F5BB00]" : "active:bg-[#F5BB00]"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end font-montserrat">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img data-tooltip-id="my-tooltip" src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#373A36] rounded-box w-52"
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
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#F5BB00", color: "#222" }}
        content={user?.displayName}
        place="left"
      />
    </div>
  );
};

export default NavBar;
