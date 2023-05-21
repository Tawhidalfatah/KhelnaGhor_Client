import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import PageTitle from "../Reusable/PageTitle/PageTitle";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "You have Succesfully logged in!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error));
  };

  console.log(error);
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "You have Succesfully logged in!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="flex justify-center border rounded-lg mt-44 p-20">
      <PageTitle title="Login Page"></PageTitle>
      <div className=" flex items-center flex-row-reverse">
        <div className="text-center w-full">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Login now to browse your favourite PoP figures!!
          </p>
        </div>
        <div className="card  w-full shadow-2xl bg-[#373A36]">
          <div className="card-body ">
            <form>
              <div className="form-control">
                {error && <p className="text-red-700">{error.message}</p>}

                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                <Link
                  to="/register"
                  className="link py-2 text-white hover:text-[#F5BB00]"
                >
                  Dont have an account? Sign Up!!
                </Link>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleSignIn}
                  className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black"
                >
                  Login
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-[#4285F4] hover:bg-[#0f64f2] flex justify-center text-white items-center gap-5 text-xl"
                >
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
