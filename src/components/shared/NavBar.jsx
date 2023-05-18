const NavBar = () => {
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
              <a className="justify-between">All Toys</a>
            </li>
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
            <a>Home</a>
          </li>
          <li>
            <a>All Toys</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end font-montserrat">
        <a className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black">
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
