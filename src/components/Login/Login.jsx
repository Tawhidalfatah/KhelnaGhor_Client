import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Login now to browse your favourite PoP figures!!
          </p>
        </div>
        <div className="card w-full max-w-xl shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Dont have an account? Sign Up!!
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black">
                  Login
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#4285F4] hover:bg-[#0f64f2] flex justify-center items-center gap-5 text-xl">
                  <FaGoogle className="h-7 w-7" />
                  Sign In with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
